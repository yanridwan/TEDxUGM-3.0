import Image from 'next/image'
import React from 'react'
import Homepage from '../pages/Homepage.jsx'
import Navbar from "@/components/Navbar/Navbar.tsx";
import Footer from '@/components/Footer/Footer.tsx';
import { getServerSession } from 'next-auth'
import { SessionProvider } from "next-auth/react";
import { authConfig } from './lib/auth'

export default async function Home() {
  const session = await getServerSession(authConfig)
  return (
    <div>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  )
}
