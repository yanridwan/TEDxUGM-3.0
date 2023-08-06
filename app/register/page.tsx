"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import LargeX from 'public/images/homepage/x-logo-large.png';
import TEDLogo from 'public/images/homepage/tedx-ugm-logo-black.png';
import Illust from 'public/register/verif-email-illust.png';
import Button from '@/components/Button/Button';

const Register = () => {

  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    
    <div>
      {index === 0 || index === 1 ? 
        <div className="flex p-12 justify-center lg:gap-12 items-center">
        <div className="hidden lg:flex flex-col items-center">
          <Image src={LargeX} alt="X Logo" className=" scale-75" />
          <Image
            src={TEDLogo}
            alt="TEDxUGM Logo"
            className=" -translate-y-10 scale-75"
          />
        </div>
        <div className="flex w-full h-full flex-col gap-2 p-6 lg:w-3/6 lg:justify-center lg:gap-4 bg-white lg:shadow-[22px_16px_43px_15px_rgba(0,0,0,0.25)] shadow-lg rounded-[20px] max-w-md lg:p-10">
          <h3 className="font-bold text-2xl  lg:text-4xl">Register</h3>
          {index === 1 ? 
          <p className="-translate-y-2 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          :
          ''
          }
  
          <form className="">
          {index === 0 ? 
            <div className='flex-col flex gap-2 font-normal  lg:text-xl lg:gap-6'>
  
              <InputField
                label="Email"
                type="email"
                placeholder="username@gmail.com"
              />
              <InputField label="Nama" type="text" />
              <InputField label="No Telp" type="text" />
              <InputField label="Password" type="password" />
              <InputField label="Re-Type" type="password" />
    
              <Button
                text="Register"
                variant="primary"
                className=" mt-5 mx-auto hover:scale-105 transition-all drop-shadow-xl w-full font-semibold "
                onClick={() => setIndex(1)}
              />
            </div>
          
          : index === 1 ?
          <div className='flex-col flex gap-2 font-normal  lg:text-xl lg:gap-6'>
            <InputField
                label="Email"
                type="email"
                placeholder="username@gmail.com"
              />
  
  <Button
                text="Verifikasi Email"
                variant="primary"
                className=" mt-5 mx-auto hover:scale-105 transition-all drop-shadow-xl w-full font-semibold"
                onClick={() => setIndex(2)}
              />
          </div>
          :  ''}
          </form>
        </div>
      </div>
      :
        
        index === 2 ? 
        
        <div className='flex flex-col justify-center lg:gap-6 items-center gap-4 mb-12 p-6'>
          <Image src={Illust} alt="Illustration Verification email" className='flex w-64 md:w-80 h-auto lg:w-[500px]' />

          <div className='flex flex-col gap-4 justify-center items-center max-w-[1290px] lg:gap-6'>
            <h1 className='font-bold text-2xl lg:text-4xl mx-auto'>Email Verification</h1>
            <p className='text-center font-sm md:text-lg md:max-w-md lg:max-w-lg xl:max-w-xl lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor risus, ultricies sit amet pretium eget, posuere non enim.</p>
            
            <Button text="Back to Home" variant="primary" href='/' className='lg:w-64 lg:text-2xl font-semibold hover:scale-110 transition-all'/>

          </div>

        </div>
        
        : ''}

    </div>
    
  );
};

export default Register;

interface InputFieldProps {
  label?: string;
  type: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-[4px]">
      <label className="text-base lg:text-sm">{label}</label>
      <input
        className="pl-4 h-8 lg:h-10 border-c-red bg-black/[9%] focus:bg-white focus:outline-none border-[1px] rounded-md text-sm lg:text-lg font-normal"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
