import React from 'react';
import Image from 'next/image';
import HeroImage from 'public/images/hero-image.png';
import Button from '../components/Button/Button';

const Homepage:React.FC = () => {
  return (
    <div>
      <div className="w-full h-screen bg-slate-100 text-white relative">
        <Image
          src={HeroImage}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="pointer-events-none"
        />

        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="flex flex-col gap-4 sm:px-8 xl:mr-96">
            <h1 className="font-bold text-3xl z-20 leading-snug sm:text-5xl lg:text-8xl lg:max-w-5xl">
              <span className="text-[#EB0028]">Memayu</span> Hayuning Bawana
            </h1>
            <p className="z-20 text-sm font-extralight sm:text-lg md:max-w-4xl lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              facilisis purus non turpis consectetur, non porttitor ante
              consectetur. Pellentesque vel est et metus imperdiet rutrum
              laoreet eu eros. Aenean at tellus pellentesque, suscipit tellus
              sit amet. Lorem ipsum dolor sit amet.
            </p>
            <div className="flex flex-col z-20 gap-4 mt-4 mx-auto lg:mx-0 lg:flex-row">
              <Button text="Register Now" variant='primary' className='w-56 md:w-64'/>
              <Button text="Schedule" variant="secondary" className='w-56 md:w-64'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
