import React from 'react';
import Image from 'next/image';
import bigX from 'public/images/homepage/big-x.png';
import Button from '../Button/Button';
import modalBg from 'public/images/homepage/modal-pic-bg.png';

interface ModalLoginProps {
  open: boolean;
  onClose: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ open, onClose }) => {
  if (!open) return null;

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="flex bg-black/40 z-50 inset-0 fixed items-center justify-center"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white w-72 h-auto flex flex-col lg:flex-row overflow-hidden rounded-2xl drop-shadow-2xl inset-0 lg:w-1/2 xl:max-w-3xl lg:h-[400px]">
        <div className="relative w-full h-1/2 lg:h-full flex items-center justify-center lg:w-1/2">
          <Image
            // className="absolute scale-50 z-30 w-auto h-full lg:h-auto lg:inset-y-0"
            className='absolute z-30 flex items-center justify-center scale-50'
            src={bigX}
            alt=""
          />
          <Image
            className="z-20 object-cover w-full h-full"
            src={modalBg}
            alt=""
          />
        </div>

        <div className="flex w-full h-full flex-col gap-2 p-6 lg:w-3/6 lg:justify-center lg:gap-4">
          <h3 className="font-bold text-lg md:text-2xl lg:text-4xl">Login</h3>
          <form className="flex-col flex gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="pl-4 h-8 border-c-red lg:h-10 focus:outline-none border-[1px] rounded-md text-sm"
              type="email"
              placeholder="username@gmail.com"
            />
            <label htmlFor="password">Password</label>
            <input
              className="pl-4 bg-black bg-opacity-[9%] lg:h-10 focus:outline-none h-8 rounded-md text-sm"
              id="password"
            />
            <Button
              text="Login"
              variant="primary"
              className=" mt-5 w-48 mx-auto hover:scale-110 transition-all drop-shadow-xl lg:w-full"
            />
            <Button
              text="Create New Account"
              variant="tertiary"
              className="w-48 mx-auto hover:scale-110 transition-all lg:w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
