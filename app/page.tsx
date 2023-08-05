"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import Homepage from '../pages/Homepage.tsx'
import Navbar from "@/components/Navbar/Navbar.tsx";
import Footer from '@/components/Footer/Footer.tsx';
// import 'swiper/swiper-bundle.min.css';


export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  
  console.log(openModal); 
  return (
    <div>
      <Navbar handleModalOpen={handleModalOpen} />
      <Homepage openModal={openModal} setOpenModal={setOpenModal} />
      <Footer />
    </div>
  )
}
