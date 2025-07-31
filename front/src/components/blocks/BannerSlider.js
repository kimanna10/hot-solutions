"use client";

import ApplicationForm from "@/components/blocks/ApplicationForm";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "@/components/ui/Button";
import Image from "next/image";

import "@/styles/banner-slider.css";

import { getGos } from "@/data/data.js";

export default function BannerSlider() {
  const gos = getGos();
  return (
    <Swiper
      navigation
      modules={[Autoplay, Pagination, Navigation, Keyboard]}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      autoplay={false}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      className="w-full h-full"
    >
      <SwiperSlide>
        <div className="flex items-center h-full sm:text-start text-center">
          <div className="w-full sm:px-12 p-0 sm:mx-10 mx-0 sm:space-y-14 space-y-8">
            <h1 className="text-4xl font-medium">
              Обучение и аттестация по охране труда - Hot Solutions
            </h1>
            <p className="text-2xl">
              Ваш помощник по вопросам Охраны Труда и Техники Безопасности
            </p>
            <Button variant="primary" size="lg">
              Записаться на обучение
            </Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center h-full">
          <div className="flex flex-col w-full gap-4 sm:px-16 px-5 sm:py-12 py-8  border-white border-3 bg-gradient-to-b from-primary to-transparent lg:flex-row">
            <div className="md:flex-[1.2] flex-1 lg:p-6 p-0 flex items-center justify-center flex-col lg:space-y-12 space-y-2  text-center">
              <h2 className="lg:text-4xl text-2xl font-semibold">
                Получи скидку 10% на обучение
              </h2>
              <p className="lg:text-2xl text-lg">
                Заполни заявку на обучение сейчас и получи скидку на наши услуги
              </p>
            </div>
            <div className="md:flex-[0.8] flex-1 lg:p-6 p-0">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-full gap-5">
          <div className="relative flex justify-center w-full lg:gap-5 sm:gap-3 gap-0.5">
            {gos.map((src, i) => (
              <div
                key={i}
                className="bg-[#7B7979]/30 relative lg:w-52 lg:h-52 sm:w-32 sm:h-32 h-20 w-20"
              >
                <Image
                  src={src}
                  alt={`gos-${i}`}
                  width={195}
                  height={195}
                  className="absolute object-contain -translate-x-1/2 left-1/2 -top-10"
                />
              </div>
            ))}
            <h2 className="absolute bottom-0 lg:text-6xl sm:text-4xl text-xl text-center uppercase -translate-x-1/2 font-zamenhof left-1/2 whitespace-nowrap">
              Контролирующие органы
            </h2>
          </div>
          <p className="text-lg text-center">
            Подробнее вы можете узнать , нажав на кнопку ниже
          </p>
          <Button variant="primary" size="lg">
            Подробнее
          </Button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
