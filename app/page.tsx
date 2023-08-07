"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import Homepage from '../pages/Homepage.tsx'
import Navbar from "@/components/Navbar/Navbar.tsx";
import Footer from '@/components/Footer/Footer.tsx';
import { getServerSession } from 'next-auth'
import { SessionProvider } from "next-auth/react";
import { authConfig } from './lib/auth'
// import 'swiper/swiper-bundle.min.css';


export default function Home() {
  // const session = await getServerSession(authConfig)


  return (
      <Homepage/>
  )
}
