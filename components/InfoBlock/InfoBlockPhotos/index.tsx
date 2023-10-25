import PhotosSlider from "./PhotosStider";
import Image from "next/image";

type InfoBlockPhotosProps = {
  images: string[];
};

const InfoBlockPhotos = ({ images }: InfoBlockPhotosProps) => {
  return (
    <div className="mt-16">
      {images.length >= 3 && <PhotosSlider images={images} />}
      {images.length == 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-wrap">
          {images.map((i) => (
            <div className="h-60 sm:h-96 relative dark:text-white" key={i}>
              <Image
                className="w-full object-cover rounded-xl"
                src={i}
                fill={true}
                sizes="(min-width: 1023px) 50vw, 100vw"
                priority={true}
                alt=""
              />
            </div>
          ))}
        </div>
      )}
      {images.length == 1 &&
        images.map((i) => (
          <div
            className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px] relative dark:text-white"
            key={i}
          >
            <Image
              className="w-full object-cover rounded-xl"
              src={i}
              fill={true}
              sizes="100vw"
              priority={true}
              alt={`Фото пункта меню: `}
            />
          </div>
        ))}
    </div>
  );
};

export default InfoBlockPhotos;
