import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TEDxLogo from 'public/images/homepage/TEDx UGM Logo White.png';
import Tiktok from 'public/images/homepage/tiktok-logo.png';
import Linkedin from 'public/images/homepage/linkedin-logo.png';
import IG from 'public/images/homepage/ig-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="absolute w-full bg-black text-white">
      <div className='bg-gradient-to-bl from-[#F00]/60 from-0% to-black to-50% w-full h-full'>
        <div className='w-full flex flex-col lg:flex-row lg:items-center px-6 gap-8 sm:px-20 lg:py-8 lg:px-12 lg:gap-12 lg:justify-evenly xl:py-14'>
          <Image src={TEDxLogo} alt="" className="w-[200px] h-auto mt-12 lg:mt-0 md:w-1/3 lg:w-[25%]" />
          <div className="flex gap-12 justify-around sm:justify-start px-2 sm:gap-20 lg:gap-8">
            <div className="flex flex-col gap-4 lg:gap-8 lg:justify-start ">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold text-sm mb-2 sm:text-lg lg:text-xl">
                  Home
                </h2>
                <Link
                  href="#"
                  className=" text-white/60 hover:text-white text-xs lg:text-xl sm:text-base"
                >
                  Talks
                </Link>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white text-xs lg:text-xl sm:text-base lg:mt-2"
                >
                  Merchandise
                </Link>
              </div>
              <div className="flex flex-col gap-1 max-w-[80px] sm:min-w-[200px] lg:min-w-[260px]">
                <h2 className="font-bold text-sm mb-1 sm:text-lg lg:text-xl lg:mb-4">
                  SPONSORHIP
                </h2>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white text-xs lg:text-xl sm:text-base"
                >
                  Our Supporter
                </Link>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white text-xs lg:text-xl sm:text-base lg:mt-2"
                >
                  Become Our Sponsorship
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-8">
              <div className="flex flex-col gap-1 lg:justify-center">
                <h2 className="font-bold text-sm mb-2 sm:text-lg lg:text-xl">Event</h2>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white text-xs lg:text-xl sm:text-base"
                >
                  Main Event
                </Link>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-sm mb-2 sm:text-lg lg:text-xl lg:mb-4">Pre-Events</h2>
                <div className="flex gap-4 lg:gap-6">
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <Link
                      href="#"
                      className="text-white/60 hover:text-white text-xs lg:text-xl sm:text-base"
                    >
                      Pre-Event 1.0
                    </Link>
                    <Link
                      href="#"
                      className="text-white/60 hover:text-white text-xs lg:text-xl sm:text-base"
                    >
                      Pre-Event 2.0
                    </Link>
                    <Link
                      href="#"
                      className="text-white/60 hover:text-white text-xs lg:text-xl sm:text-base"
                    >
                      Pre-Event 3.0
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <Link
                      href="#"
                      className="text-white/60 hover:text-white text-xs lg:text-xl sm:text-base"
                    >
                      Pre-Event 4.0
                    </Link>
                    <Link
                      href="#"
                      className="text-white/60 hover:text-white text-xs lg:text-xl sm:text-base"
                    >
                      Pre-Event 5.0
                    </Link>
                    <Link
                      href="#"
                      className="text-white/60 hover:text-white text-xs lg:text-xl sm:text-base"
                    >
                      Pre-Event 6.0
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-12 lg:flex-col lg:gap-10">
            <div className="flex flex-col">
              <h2 className="font-bold text-sm mb-2 sm:text-lg lg:text-xl lg:mb-4">Find Us On:</h2>
              <div className="flex gap-4 lg:gap-8">
                <Image src={Linkedin} alt="" className="h-6 lg:h-10 w-auto"></Image>
                <Image src={IG} alt="" className="h-6 w-auto lg:h-10"></Image>
                <Image src={Tiktok} alt="" className="h-6 w-auto lg:h-10"></Image>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-sm mb-2 sm:text-lg lg:text-xl lg:mb-4">
                Connect With Us:
              </h2>
              <div className="flex gap-4 lg:gap-8">
                <Image src={Linkedin} alt="" className="h-6 w-auto lg:h-10"></Image>
                <Image src={IG} alt="" className="h-6 w-auto lg:h-10"></Image>
                <Image src={Tiktok} alt="" className="h-6 w-auto lg:h-10"></Image>
              </div>
            </div>
          </div>
          <div className='lg:hidden'>
            <hr className="border-t border-c-red border-2 border-b-0" />
            <div className="py-4 md:py-8 lg:py-12">
              <p className="text-xs lg:text-xl font-light text-center items-center justify-center">
                @2023 Designed by TEDx UGM | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
          <hr className="hidden lg:flex border-t border-c-red border-2 border-b-[1px] mx-20" />
        <div className='hidden lg:flex  items-center justify-center xl:py-6'>
          <div className="py-6">
            <p className="text-base font-light text-center">
              @2023 Designed by TEDx UGM | All Rights Reserved
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
