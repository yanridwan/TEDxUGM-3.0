'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import HeroImage0 from '../../public/images/homepage/hero-image.png';
import HeroImage1 from '../../public/images/homepage/hero-1.jpg';
import HeroImage2 from '../../public/images/homepage/hero-2.jpg';
import HeroImage3 from '../../public/images/homepage/hero-3.jpg';
import styling from './HeroCarousel.module.css';
import {Autoplay} from 'swiper/modules';
import './HeroCarousel.module.css'

export default function HeroCarousel() {
  return (
    <div className={styling.heroCarousel}>
      {/* <div className='bg-black/30 h-screen w-full'></div> */}
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 8000,
        }}
        modules={[Autoplay]}
        className={styling.swiperContainer}
      >
        <SwiperSlide>
          <div className={styling.slide}>
            <Image

              src={HeroImage0}
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styling.slide}>
            <Image

              src={HeroImage1}
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styling.slide}>
            <Image
              src={HeroImage2}
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styling.slide}>
            <Image
              src={HeroImage3}
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
