'use client';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TEDx UGM 2023'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const [openModal, setOpenModal] = useState(false);

    const handleModalOpen = () => {
      setOpenModal(true);
    };
  
    return (
    <html lang="en">
      <body className={inter.className}>
      <div>
        <Navbar handleModalOpen={handleModalOpen} />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  )
}
