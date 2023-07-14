import Image from 'next/image'
import React from 'react'
import Homepage from '../pages/Homepage.tsx'
import Navbar from "@/components/Navbar/Navbar.tsx";
import Footer from '@/components/Footer/Footer.tsx';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      {/* <Footer /> */}
    </div>
  )
}
