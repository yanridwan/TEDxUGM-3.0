'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// import styling from './BlurCarousel.module.css';
import './styles.css'
// import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';

// const CarouselContent: any[] = [
//   'https://swiperjs.com/demos/images/nature-1.jpg',
//   'https://swiperjs.com/demos/images/nature-2.jpg',
//   'https://swiperjs.com/demos/images/nature-3.jpg',
//   'https://swiperjs.com/demos/images/nature-4.jpg',
//   'https://swiperjs.com/demos/images/nature-5.jpg',
// ];

const CarouselContents: any[] = [
  {
    title: 'BUMN Leadership 101',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
    image: 'https://swiperjs.com/demos/images/nature-1.jpg',
  },
  {
    title: 'Traveloka 101',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
    image: 'https://swiperjs.com/demos/images/nature-2.jpg',
  },
  {
    title: 'Telkomsel 101',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
    image: 'https://swiperjs.com/demos/images/nature-3.jpg',
  },
  {
    title: 'Blibli 101',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
    image: 'https://swiperjs.com/demos/images/nature-4.jpg',
  },
  {
    title: 'Shopee 101',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
    image: 'https://swiperjs.com/demos/images/nature-5.jpg',
  },
];
export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  // const CarouselContent: any[] = [
  //   'https://swiperjs.com/demos/images/nature-1.jpg',
  //   'https://swiperjs.com/demos/images/nature-2.jpg',
  //   'https://swiperjs.com/demos/images/nature-3.jpg',
  //   'https://swiperjs.com/demos/images/nature-4.jpg',
  //   'https://swiperjs.com/demos/images/nature-5.jpg',
  // ];

  const CarouselContents: any[] = [
    {
      title: '[TEDxUGM 2023]',
      description:
        'Global Enchantment, Homegrown Perfection Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
      image: '/preEvent.png',
    },
    {
      title: 'Traveloka 101',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
      image: 'https://swiperjs.com/demos/images/nature-2.jpg',
    },
    {
      title: 'Telkomsel 101',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
      image: 'https://swiperjs.com/demos/images/nature-3.jpg',
    },
    {
      title: 'Blibli 101',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
      image: 'https://swiperjs.com/demos/images/nature-4.jpg',
    },
    {
      title: 'Shopee 101',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus non turpis consectetur, non porttitor ante consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.',
      image: 'https://swiperjs.com/demos/images/nature-5.jpg',
    },
  ];


  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={1.5}
        // spaceBetween={20}
        breakpoints={{

          425: {
            
            spaceBetween: 50,
            slidesPerView:1.8
          },
          640: {
            
            spaceBetween: 90,
            slidesPerView:1.5
          },
          768: {
            spaceBetween: 90,
            slidesPerView:1.6
          },
          1024: {
            spaceBetween: 200,
            slidesPerView:1.5
          },
        }}
        navigation={true}
        // loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        
        // className={styling.Carousel}
        className=''
      >
        {/* {CarouselContent.map((item, index) => (
          <SwiperSlide key={index} className="shadow-sm transition-all">
            <img src={item} alt="img" className="" />
          </SwiperSlide>
        ))} */}
        {CarouselContents.map((item, index) => (
          <SwiperSlide key={index} className="shadow-sm transition-all ">
            <img src={item.image} alt="img" className="rounded-md sm:rounded-xl lg:h-72 lg:rounded-none" />

            {activeIndex === index && (
              <div className='text-xs lg:text-lg pt-4 text-justify px-8 sm:text-base md:text-lg h-auto max-w-lg mx-auto lg:mt-6 xl:text-2xl xl:px-0 xl:mt-24'>
                <h3 className='font-bold italic'>{item.title}</h3>
                <p className=''>{item.description}</p>
              </div>
            )}
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
