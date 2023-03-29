import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
import Image from "next/image";

const Slider = () => {
  return (
    <Swiper
      // lazy={true}
      rewind={true}
      slidesPerView={3}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      // className="mySwiper"
    >
      <SwiperSlide>
        <Image width={100} height={100} src="/thirteen.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={100} height={100} src="/thirteen.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={100} height={100} src="/thirteen.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={100} height={100} src="/thirteen.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={100} height={100} src="/thirteen.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={100} height={100} src="/thirteen.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={100} height={100} src="/thirteen.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={100} height={100} src="/thirteen.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={100} height={100} src="/thirteen.svg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
