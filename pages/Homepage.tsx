import React from 'react';
import Image from 'next/image';
import HeroImage from 'public/images/hero-image.png';
import Button from '../components/Button/Button';
import Carousel from '../components/Carousel/Carousel';
import Xlogo from 'public/images/x-logo-large.png';
import TEDXLogo from 'public/images/tedx-ugm-logo-black.png';
import HeroCarousel from 'components/HeroCarousel/HeroCarousel.tsx';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


const Homepage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <div className="mx-8 md:mx-16">
        <CarouselSection />
        <ViewEventSection />
      </div>
    </div>
  );
};

export default Homepage;

const HeroSection: React.FC = () => {
  return (
    <div className="w-full h-screen  text-white relative">
      <HeroCarousel />     

      <div className="absolute inset-0 flex items-center justify-center px-8 w-fuo">
        <div className="absolute inset-0 bg-black opacity-30 z-20"></div>
        <div className="flex flex-col gap-4 sm:px-8 xl:mr-96 z-30">
          <h1 className="font-bold text-3xl z-20 leading-snug sm:text-5xl lg:text-8xl lg:max-w-5xl">
            <span className="text-[#EB0028]">Memayu</span> Hayuning Bawana
          </h1>
          <p className="z-20 text-sm font-extralight sm:text-lg md:max-w-4xl lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            facilisis purus non turpis consectetur, non porttitor ante
            consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet
            eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex flex-col z-20 gap-4 mt-4 mx-auto lg:mx-0 lg:flex-row">
            <Button
              text="Register Now"
              variant="primary"
              className="w-56 md:w-64"
            />
            <Button
              text="Schedule"
              variant="secondary"
              className="w-56 md:w-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CarouselSection: React.FC = () => {
  return <div className="w-full h-[72vh] bg-slate-100"></div>;
};

const ViewEventSection: React.FC = () => {
  return (
    <div className="h-auto w-full my-20 bg-slate-200 flex flex-col gap-4 md:gap-8 md:flex-row md:flex-grow">
      <div className="flex flex-col gap-4 md:justify-center">
        <Image
          src={Xlogo}
          alt=""
          className="w-36 h-auto md:w-full mx-auto object-contain"
        />
        <Image
          src={TEDXLogo}
          alt=""
          className="w-40 h-auto mx-auto object-contain md:w-96" 
        />
      </div>
      <div className="flex flex-col gap-2 md:w-[90%]">
        <Button
          text="View Our Event at Official TED"
          variant="primary"
          className="w-64 mx-auto"
        />
        <p className="font-sm leading-8 text-justify mt-4 md:mt-0 md:text-lg md:leading-loose">
          TED is a nonpartisan nonprofit devoted to spreading ideas, usually in
          the form of short, powerful talks. TED began in 1984 as a conference
          where Technology, Entertainment and Design converged, and today covers
          almost all topics — from science to business to global issues — in
          more than 110 languages. Meanwhile, independently run TEDx events help
          share ideas in communities around the world.
        </p>
        <Button
          text="Don't Miss On Our Updates"
          variant="primary"
          className="w-64 mx-auto"
        />
      </div>
    </div>
  );
};
