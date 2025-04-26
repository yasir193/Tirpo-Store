import React from 'react'
import pinkSand from '../../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل خشن/رمل بينك خشن.jpg'
import StyledCard from './../../common/StyledCard';

export default function RoughSand() {
  return <>
  
  <div className="container py-4">
      <h2 className="text-center text-white mb-4">{'رمل خشن'}</h2>
      <div className="row">
        <StyledCard
          image={pinkSand}
          title={'رمل بينك خشن'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل بينك خشن'}
          phoneNumber="+2001000178117"
        />
      </div>
  </div>
  </>
}
