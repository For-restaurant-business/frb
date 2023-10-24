"use client";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Next from "assets/icons/Next.svg";
import Prev from "assets/icons/Prev.svg";

type PhotosSliderProps = {
  images: string[];
};

const PhotosSlider = ({ images }: PhotosSliderProps) => {
  const sliderResponsive =
    "max-w-[90vw] sm:max-w-[90%] lg:max-w-2xl min-[1080px]:max-w-3xl min-[1210px]:max-w-4xl min-[1350px]:max-w-5xl min-[1480px]:max-w-6xl min-[1630px]:max-w-none";

  return (
    <div className={`relative m-auto ${sliderResponsive}`}>
      <button className="customPrev absolute sm:-left-10 left-0 top-[calc(50%-2.5rem)] z-10 dark:hover:text-slate-300 transition-colors">
        <Prev className="h-10 w-10" />
      </button>
      <Swiper
        navigation={{ nextEl: ".customNext", prevEl: ".customPrev" }}
        spaceBetween={100}
        slidesPerView={1}
        modules={[Navigation]}
        grabCursor={true}
        className={`h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] ${sliderResponsive}`}
      >
        {images.map((i) => (
          <SwiperSlide key={i} className="rounded-xl">
            <div className="h-full relative dark:text-white">
              <Image
                className="w-full object-cover rounded-xl"
                src={i}
                fill={true}
                sizes="100vw"
                priority={true}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="customNext absolute sm:-right-10 right-0 top-[calc(50%-2.5rem)] z-10 dark:hover:text-slate-300 transition-colors">
        <Next className="w-10 h-10" />
      </button>
    </div>
  );
};

export default PhotosSlider;
