"use client";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// import required modules

// import "@/styles/banner-slider.css";

export default function GallerySlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-10">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={` ${src}`}
              alt={`cloudinary-img-${i}`}
              className="w-full h-[400px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`cloudinary-img-${i}`}
              className="w-full h-auto cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
