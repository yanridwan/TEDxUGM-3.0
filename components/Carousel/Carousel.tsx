'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';
const CarouselContent: any[] = [

  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
  'https://swiperjs.com/demos/images/nature-5.jpg',
];

// const CarouselContents: any[] = [
//   {
//     title: 'BUMN Leadership 101',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
//     image: 'https://swiperjs.com/demos/images/nature-1.jpg',
//   },
//   {
//     title: 'Traveloka 101',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
//     image: 'https://swiperjs.com/demos/images/nature-2.jpg',
//   },
//   {
//     title: 'Telkomsel 101',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
//     image: 'https://swiperjs.com/demos/images/nature-3.jpg',
//   },
//   {
//     title: 'Blibli 101',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
//     image: 'https://swiperjs.com/demos/images/nature-4.jpg',
//   },
//   {
//     title: 'Shopee 101',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
//     image: 'https://swiperjs.com/demos/images/nature-5.jpg',
//   },
// ];
export default function Carousels() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={30}
        breakpoints={{
          640: {
            spaceBetween: 90,
          },
          768: {
            spaceBetween: 150,
          },
          1024: {
            spaceBetween: 200,
          },
        }}
        navigation={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        className=""
      >
        {CarouselContent.map((item, index) => (
          <SwiperSlide key={index} className="shadow-sm transition-all">
            <img src={item} alt="img" className="rounded-sm" />
          </SwiperSlide>
      ))}
      </Swiper>

          {/* {CarouselContents.map((item, index) => (
        <div className='mt-10 mx-14' key={index}>
          <h2>{item.title}</h2>
          <p className='text-justify'>
            {item.description}
          </p>
        </div>

          ))} */}
    </>
  );
}
