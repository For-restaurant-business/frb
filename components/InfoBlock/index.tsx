import { InfoBlock as InfoBlockType } from "lib/types";
import InfoBlockPhotos from "./InfoBlockPhotos";

const InfoBlock = ({ title, text, images }: InfoBlockType) => {
  return (
    <div className="text-slate-700 dark:text-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl w-full text-center font-light">
        {title}
      </h2>
      {images?.length && <InfoBlockPhotos images={images} />}
      <p className="mt-8 font-extralight text-lg sm:mx-8">{text}</p>
      <span className="block h-[1px] w-[40%] md:w-96 bg-slate-700 dark:bg-slate-400 m-auto mt-14 mb-14" />
    </div>
  );
};

export default InfoBlock;
