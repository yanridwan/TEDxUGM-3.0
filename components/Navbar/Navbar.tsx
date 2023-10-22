'use client';
import React, { useState } from 'react';
import SmallLogo from 'public/images/homepage/logo-small.png';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
import ModalLogin from '../ModalLogin/ModalLogin';

interface NavbarProps {
  handleModalOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [openModal, setModalOpen] = useState<boolean>(false);
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

  const handleModalClose = () => {
    setModalOpen(false);
  }
  
  console;
  return (
    <nav className="font-bold text-xs lg:text-sm shadow-md object-cover w-full bg-[url('/images/homepage/background-pattern.png')] bg-white sticky top-0 z-50">
      <div className="px-10 py-4 flex justify-between">
        <Link href="/">
          <Image
            src={SmallLogo}
            alt=""
            className="w-[54px] h-[60px] cursor-pointer"
          />
        </Link>
        <svg
          onClick={toggleNavbar}
          className="my-auto cursor-pointer md:hidden scale-75"
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

        <div className="hidden md:flex group/preevent">
          <ul className="flex flex-col md:flex-row md:items-center gap-8">
            <li
              className="flex items-center"
              onMouseEnter={togglePreEvent}
              onMouseLeave={togglePreEvent}
            >
              <a
                href="#"
                className={`${
                  isPreEventOpen ? 'text-c-red' : 'text-black'
                } hover:text-c-red transition-all`}
              >
                PRE-EVENTS
              </a>
              {/* <img src={DropdownIcon} alt="" className="ml-2" /> */}
              <div className="ml-2 group/preevent-hover:rotate-180 transition-all">
                <svg
                  width="21"
                  height="13"
                  viewBox="0 0 21 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_348_1900"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="21"
                    height="13"
                  >
                    <path d="M0 0H20.625V12.7708H0V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_348_1900)">
                    <path
                      d="M18.1927 -2L10.3125 5.80729L2.43229 -2L0 0.406251L10.3125 10.6302L20.625 0.406251L18.1927 -2Z"
                      fill="#FF2C07"
                    />
                  </g>
                </svg>
              </div>

              {/* <DropdownIcon />   */}
              {isPreEventOpen && (
                <div className="absolute bg-c-red w-auto h-auto top-14 rounded-lg text-base text-white flex flex-col font-normal  overflow-hidden gap-1 z-50">
                  <div className="overflow-hidden flex flex-col">
                    <div className="px-6 pt-2 pb-1 hover:bg-black">
                      <Link href="/recap-talkshow">Talk Show Road To TEDxUGM</Link>
                    </div>
                    <hr className="border-t border-black border-[0.5px] border-b-0 mx-4" />
                    <div className="px-6 py-1 hover:bg-black">
                      <Link href="#">Bike To TEDxUGM</Link>
                    </div>
                    <hr className="border-t border-black border-[0.5px] border-b-0 mx-4 " />
                    <div className="px-6 py-1 hover:bg-black">
                      <Link href="/local-assets">“The Local Assets” Documentaries</Link>
                    </div>
                    <hr className="border-t border-black border-[0.5px] border-b-0 mx-4" />
                    <div className="px-6 pt-1 pb-2 hover:bg-black">
                      <Link href="/point-of-view">“A Point Of View” Interviews</Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="flex justify-center">
              <a className="hover:text-c-red transition-all" href="/comingsoon">
                MAIN EVENTS
              </a>
            </li>
            <li>
              <Link
                className="hover:text-c-red transition-all"
                href="/merchandise"
              >
                MERCHANDISE
              </Link>
            </li>
            <li>
              <Link className="hover:text-c-red transition-all" href="/partnership">
                PARTNERSHIP
              </Link>
            </li>
            <li
              className="flex items-center z-50 group/about"
              onMouseEnter={toggleAbout}
              onMouseLeave={toggleAbout}
            >
              <Link
                href="/about"
                className={`${
                  isAboutOpen ? 'text-c-red' : 'text-black'
                } hover:text-c-red transition-all group/about`}
              >
                ABOUT US
              </Link>
              {/* <Image src={DropdownIcon} alt="Dropdown Icon" className="ml-2" /> */}
              <div className="ml-2 group/about-hover:rotate-180 transition-all">
                <svg
                  width="21"
                  height="13"
                  viewBox="0 0 21 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_348_1900"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="21"
                    height="13"
                  >
                    <path d="M0 0H20.625V12.7708H0V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_348_1900)">
                    <path
                      d="M18.1927 -2L10.3125 5.80729L2.43229 -2L0 0.406251L10.3125 10.6302L20.625 0.406251L18.1927 -2Z"
                      fill="#FF2C07"
                    />
                  </g>
                </svg>
              </div>
              {isAboutOpen && (
                <div className="absolute bg-c-red w-auto h-auto top-14 rounded-lg text-base text-white flex flex-col font-normal  overflow-hidden gap-1">
                  <div className="overflow-hidden flex flex-col">
                    <div className="px-6 pt-2 pb-1 hover:bg-black">
                      <Link href="/about">About TED&TEDx</Link>
                    </div>
                    <hr className="border-t border-black border-[0.5px] border-b-0 mx-4" />

                    <div className="px-6 py-1 hover:bg-black">
                      <Link href="#">Our Team</Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <div onClick={()=>{setModalOpen(true)}}>
                <Button
                  variant="primary"
                  text="SIGN IN"
                  className="md:w-24 lg:w-40 hover:scale-105 transition-transform"
                />
              </div>
              
              <div className="relative">
                  <ModalLogin onClose={handleModalClose} open={openModal} />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'absolute' : 'hidden'
        } md:hidden bg-black/80 transition-all duration-300 ease-in-out z-50`}
        style={{ maxHeight: isOpen ? '1000px' : '0', width: '100%' }}
      >
        <div className="flex items-center justify-center text-center py-4 text-white">
          <ul className="flex flex-col md:flex-row gap-4 text-base font-normal">
            <div className="">
              <li>
                <a className="hover:text-c-red transition-all" href="#">
                  PRE-EVENTS
                </a>
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
              <a className="hover:text-c-red transition-all" href="#">
                MAIN EVENTS
              </a>
              <hr className="border-t border-black border-[0.5px] border-b-0" />
            </li>

            <li>
              <Link
                className="hover:text-c-red transition-all"
                href="/merchandise"
              >
                MERCHANDISE
              </Link>
            </li>
            <li>
              <Link className="hover:text-c-red transition-all" href="/sponsor">
                SPONSORSHIP
              </Link>
            </li>
            <li>
              <a className="hover:text-c-red transition-all" href="#">
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
