'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import HeroImage from 'public/images/hero-image.png';
import HeroImage2 from 'public/images/hero-image-2.jpg';
import HeroImage3 from 'public/images/hero-image-3.jpg';
import styles from './HeroCarousel.module.css';
import {Autoplay} from 'swiper/modules';

export default function HeroCarousel() {
  return (
    <div className={styles.heroCarousel}>
      {/* <div className='bg-black/30 h-screen w-full'></div> */}
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 8000,
        }}
        modules={[Autoplay]}
        className={styles.swiperContainer}
      >
        <SwiperSlide>
          <div className={styles.slide}>
            <Image
              
              src={HeroImage}
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
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
          <div className={styles.slide}>
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
