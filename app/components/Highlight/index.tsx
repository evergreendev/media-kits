type Props = {
  text1: string;
  text2: string;
};

const Highlight = ({ text1, text2 }: Props) => {
  return (
    <div className="w-48 text-center">
      <div className="font-sans font-extrabold text-4xl sm:text-5xl">
        {text1}
      </div>
      <div className="font-sans uppercase font-bold text-2xl sm:text-xl leading-snug">
        {text2}
      </div>
    </div>
  );
};

export default Highlight;
