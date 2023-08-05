"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import HeroImage from 'public/images/hero-image.png';
import Button from '../components/Button/Button';
import Carousel from '../components/Carousel/Carousel';
import Xlogo from 'public/images/x-logo-large.png';
import TEDXLogo from 'public/images/tedx-ugm-logo-black.png';
import ModalLogin from '../components/ModalLogin/ModalLogin.tsx';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.tsx';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

interface HomepageProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const Homepage: React.FC<HomepageProps> = ({openModal, setOpenModal}) => {
  

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div className='w-full h-auto'>
      <div className='relative'>

      <ModalLogin onClose={handleModalClose} open={openModal}/>
      </div>
      <HeroSection />
      <div className="mx-8 md:mx-16 mt-20 flex flex-col md:gap-24">
        <CarouselSection />
        <hr  className='border-2 border-black/60'/>
        <ViewEventSection />
        <CTASection />
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
        <div className="flex flex-col gap-4 sm:px-8 xl:mr-96 z-30 lg:ml-14">
          <h1 className="font-bold text-3xl z-20 leading-snug sm:text-5xl lg:text-8xl lg:max-w-5xl ">
          Damar: <span className="text-[#EB0028]">Memayu Hayuning</span> Bawana
          </h1>
          <p className="z-20 text-sm font-extralight sm:text-lg md:max-w-4xl lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            facilisis purus non turpis consectetur, non porttitor ante
            consectetur. Pellentesque vel est et metus imperdiet rutrum laoreet
            eu eros. Aenean at tellus pellentesque, suscipit tellus sit amet.
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex flex-col z-20 gap-4 mt-4 mx-auto lg:mx-0 lg:flex-row lg:gap-8">
            <Button
              text="Register Now"
              variant="primary"
              className="w-56 md:w-64 hover:scale-110 transition-transform lg:text-xl"
            />
            <Button
              text="Schedule"
              variant="secondary"
              className="w-56 md:w-64 hover:scale-110 lg:text-xl transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CarouselSection: React.FC = () => {
  return (
    <div className="w-full h-auto mt-20 max-w-5xl mx-auto">
      <Carousel />
    </div>
  );
};

const ViewEventSection: React.FC = () => {
  return (
    <div className="h-auto w-full my-20  flex flex-col gap-4 md:gap-8 md:flex-row md:flex-grow max-w-6xl lg:mx-auto">
      <div className="flex flex-col gap-4 md:justify-center lg:w-[30%] md:h-full md:w-96">
        <Image
          src={Xlogo}
          alt=""
          className="w-36 h-auto md:w-[80%] mx-auto object-contain"
        />
        <Image
          src={TEDXLogo}
          alt=""
          className="w-40 h-auto md:w-[80%] mx-auto object-contain"
        />
      </div>
      <div className="flex flex-col gap-6 md:w-[90%] lg:justify-center">
        <p className="font-sm leading-8 text-justify mt-4 md:mt-0 md:text-lg md:leading-loose xl:text-xl xl:leading-10">
          TED is a nonpartisan nonprofit devoted to spreading ideas, usually in
          the form of short, powerful talks. TED began in 1984 as a conference
          where Technology, Entertainment and Design converged, and today covers
          almost all topics — from science to business to global issues — in
          more than 110 languages. Meanwhile, independently run TEDx events help
          share ideas in communities around the world.
        </p>
        <Button
          text="View Our Event at Official TED"
          variant="primary"
          className="w-64 mx-auto md:mx-0 hover:scale-110 transition-all lg:w-96 lg:text-xl"
        />
      </div>
    </div>
  );
};

const CTASection: React.FC = () => {
  return (
    <div>
      {/* <div className="bg-black/60 w-full h-full absolute z-10">s</div> */}
      <div className="w-full h-auto rounded-2xl bg-slate-600 text-white mt-4 mb-20 bg-[url('/images/homepage/cta-bg.png')] overflow-hidden lg:rounded-[72px]">
        {/* <div className="w-full h-auto rounded-2xl bg-black/60  text-white flex flex-col justify-center py-8 items-center gap-4 mt-4 mb-20 px-8 overflow-hidden "> */}
        <div className="w-full h-full z-10 bg-black/60 flex p-8 flex-col justify-center items-center gap-4 sm:gap-8 lg:py-36 lg:gap-12">
          <div className=" flex flex-col items-center text-center gap-2 sm:gap-6">
            <p className="text-base font-bold flex sm:text-lg lg:text-2xl">Take Your Risk Now</p>
            <div className="text-3xl font-bold text-center sm:text-5xl flex flex-col sm:gap-3 lg:text-7xl xl:text-8xl">
              <h2 className="">
                <span className="text-c-red">Small</span> Act
              </h2>
              <h2 className=" ">
                Big
                <span className="text-c-red"> Waves</span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <Button
              text="Register Now"
              variant="secondary"
              className="w-40 mx-auto lg:w-60 xl:w-72 lg:text-2xl xl:text-3xl hover:scale-110 transition-transform"
            />
            <p className="text-center lg:text-xl">OR</p>
            <Button
              text="Check Our Agenda"
              variant="secondary"
              className="w-48 mx-auto lg:w-72 xl:w-96 lg:text-2xl xl:text-3xl hover:scale-110  transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
