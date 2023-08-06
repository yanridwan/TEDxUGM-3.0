'use client';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

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
      <body>
      <div>
        <Navbar handleModalOpen={handleModalOpen} />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  )
}
