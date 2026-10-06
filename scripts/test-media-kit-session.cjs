const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');

function load(file) {
    const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
        compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022},
    }).outputText;
    const module = {exports: {}};
    new Function('module', 'exports', 'require', source)(module, module.exports, require);
    return module.exports;
}

async function main() {
    process.env.MEDIA_KIT_SESSION_SECRET = require('node:crypto').randomBytes(32).toString('hex');
    const {createMediaKitSession, readMediaKitSession, sessionCookieOptions} = load('app/lib/mediaKitSession.ts');
    const {impactReservationUrl, IMPACT_FORM_URL} = load('app/lib/impactReservation.ts');
    const input = {
        contactId: '12345', firstName: 'Test & Example', lastName: 'Visitor',
        email: 'visitor+test@example.com', organizationName: 'Example & Company',
    };
    const token = await createMediaKitSession(input);
    const decoded = await readMediaKitSession(token);
    for (const [key, value] of Object.entries(input)) assert.equal(decoded[key], value);
    assert.equal(token.includes(input.email), false);
    assert.equal(sessionCookieOptions.httpOnly, true);
    assert.equal(await readMediaKitSession('v1:hs:12345'), null);
    assert.equal(await readMediaKitSession(undefined), null);
    assert.equal(await readMediaKitSession(token + '.extra'), null);
    const parts = token.split('.');
    parts[2] = (parts[2][0] === 'A' ? 'B' : 'A') + parts[2].slice(1);
    assert.equal(await readMediaKitSession(parts.join('.')), null);
    const originalNow = Date.now;
    Date.now = () => originalNow() + 181 * 24 * 60 * 60 * 1000;
    assert.equal(await readMediaKitSession(token), null);
    Date.now = originalNow;
    const url = new URL(impactReservationUrl(decoded));
    assert.equal(url.searchParams.get('firstname'), input.firstName);
    assert.equal(url.searchParams.get('email'), input.email);
    assert.equal(url.searchParams.get('name'), input.organizationName);
    assert.equal(url.searchParams.has('contactId'), false);
    assert.equal(impactReservationUrl(null), IMPACT_FORM_URL);
    process.env.MEDIA_KIT_SESSION_SECRET = require('node:crypto').randomBytes(32).toString('hex');
    assert.equal(await readMediaKitSession(token), null);
    delete process.env.MEDIA_KIT_SESSION_SECRET;
    assert.equal(await readMediaKitSession(token), null);
    await assert.rejects(createMediaKitSession(input), /MEDIA_KIT_SESSION_SECRET/);
    console.log('Passed: session round trip, encryption, tampering, legacy cookies, expiry, key rotation, missing key, and prefill URL encoding.');
}

main().catch(error => { console.error(error); process.exitCode = 1; });
