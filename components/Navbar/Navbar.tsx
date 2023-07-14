'use client';
import React, { useState } from 'react';
import SmallLogo from 'public/images/logo-small.png';
import DropdownIcon from 'public/images/navbar-dropdown-icon.svg';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPreEventOpen, setIsPreEventOpen] = useState<boolean>(false);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const togglePreEvent = () => {
    setIsPreEventOpen(!isPreEventOpen);
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <nav className="font-bold text-xs lg:text-sm shadow-md">
      <div className="px-10 py-4 flex justify-between bg-[navbar-pattern]">
        <Link href="/">
          <Image
            src={SmallLogo}
            alt=""
            className="w-[54px] h-[60px] cursor-pointer"
          />
        </Link>
        <svg
          onClick={toggleNavbar}
          className="my-auto cursor-pointer md:hidden"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
            fill="#FF2C07"
          />
        </svg>

        <div className="hidden md:flex">
          <ul className="flex flex-col md:flex-row md:items-center gap-8">
            <li className="flex items-center" onClick={togglePreEvent}>
              <a
                href="#"
                className={`${
                  isPreEventOpen ? 'text-c-red' : 'text-black'
                } hover:text-c-red transition-all`}
              >
                PRE-EVENTS
              </a>
              <Image src={DropdownIcon} alt="" className="ml-2" />
              {isPreEventOpen && (
                <div className="absolute bg-c-red w-auto h-auto top-14 rounded-lg text-base text-white flex flex-col font-normal  overflow-hidden gap-1">
                  <div className="overflow-hidden flex flex-col">
                    <div className="px-6 pt-2 pb-1 hover:bg-black">
                      <Link href="#">Talk Show Road To TEDxUGM</Link>
                    </div>
                    <hr className="border-t border-black border-[0.5px] border-b-0 mx-4" />
                    <div className="px-6 py-1 hover:bg-black">
                      <Link href="#">Bike To TEDxUGM</Link>
                    </div>
                    <hr className="border-t border-black border-[0.5px] border-b-0 mx-4 " />
                    <div className="px-6 py-1 hover:bg-black">
                      <Link href="#">“The Local Assets” Documentaries</Link>
                    </div>
                    <hr className="border-t border-black border-[0.5px] border-b-0 mx-4" />
                    <div className="px-6 pt-1 pb-2 hover:bg-black">
                      <Link href="#">“A Point Of View” Interviews</Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="flex justify-center">
              <a href="#">MAIN EVENTS</a>
            </li>
            <li>
              <a href="#">MERCHANDISE</a>
            </li>
            <li>
              <a href="#">SPONSORSHIP</a>
            </li>
            <li className="flex items-center" onClick={toggleAbout}>
              <a
                href="#"
                className={`${
                  isAboutOpen ? 'text-c-red' : 'text-black'
                } hover:text-c-red transition-all`}
              >
                ABOUT US
              </a>
              <Image src={DropdownIcon} alt="" className="ml-2" />
              {isAboutOpen && (
                <div className="absolute bg-c-red w-auto h-auto top-14 rounded-lg text-base text-white flex flex-col font-normal  overflow-hidden gap-1">
                  <div className="overflow-hidden flex flex-col">
                    <div className="px-6 pt-2 pb-1 hover:bg-black">
                      <Link href="#">About TED&TEDx</Link>
                    </div>
                    <hr className="border-t border-black border-[0.5px] border-b-0 mx-4" />

                    <div className="px-6 py-1 hover:bg-black">
                      <Link href="#">Our Team</Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>Sign up button</li>
          </ul>
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'absolute' : 'hidden'
        } md:hidden bg-slate-300 transition-all duration-500 ease-in-out`}
        style={{ maxHeight: isOpen ? '1000px' : '0', width: '100%' }}
      >
        <div className="flex items-center justify-center text-center py-4">
          <ul className="flex flex-col md:flex-row gap-4">
            <div className="">
              <li>
                <a href="#">PRE-EVENTS</a>
              </li>
              <svg
                width="21"
                height="13"
                viewBox="0 0 21 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:flex"
              >
                <mask
                  id="mask0_234_15153"
                  style={{ maskType: 'luminance' }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="21"
                  height="13"
                >
                  <path d="M0 0H20.625V12.7708H0V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_234_15153)">
                  <path
                    d="M18.1927 -2L10.3125 5.80729L2.43229 -2L0 0.406251L10.3125 10.6302L20.625 0.406251L18.1927 -2Z"
                    fill="#FF2C07"
                  />
                </g>
              </svg>
            </div>
            <li className="flex justify-center">
              <a href="#">MAIN EVENTS</a>
            <hr className="border-t border-black border-[0.5px] border-b-0" />
            </li>

            <li>
              <a href="#">MERCHANDISE</a>
            </li>
            <li>
              <a href="#">SPONSORSHIP</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
