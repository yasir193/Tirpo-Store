import React from 'react'
import Navbar from './../Navbar/Navbar';
import { Analytics } from "@vercel/analytics/react"
import { Outlet } from 'react-router-dom';
import WhatsAppButton from './../common/WhatsAppButton';

export default function Layout() {
  return <>
  
    <Navbar />
    
      <Outlet/>
    
    <WhatsAppButton/>
    <Analytics/>
  
  </>
}
