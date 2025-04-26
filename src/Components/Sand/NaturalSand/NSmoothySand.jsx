import React from 'react';
import whiteSand from '../../../assets/imgs/رمل الوان/رمل نقي طبيعي/رمل طبيعي ناعم/رمل ناعم طبيعي لون ابيض.jpg';
import whiteSand2 from '../../../assets/imgs/رمل الوان/رمل نقي طبيعي/رمل طبيعي ناعم/رمل ناعم طبيعي لون ابيض (2).jpg';
import whiteSand3 from '../../../assets/imgs/رمل الوان/رمل نقي طبيعي/رمل طبيعي ناعم/رمل ناعم طبيعي لون ابيض (3).jpg';

import StyledCard from '../../common/StyledCard';

export default function SmoothySand() {
  return (
    <div className="container py-4">
      <h2 className="text-center text-white mb-4">{'رمل ناعم'}</h2>
      <div className="row">
        <StyledCard
          image={whiteSand}
          title={'رمل ناعم ابيض'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم ابيض'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={whiteSand2}
          title={'رمل ناعم ابيض'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم ابيض'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={whiteSand3}
          title={'رمل ناعم ابيض'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم ابيض'}
          phoneNumber="+2001000178117"
        />
        
      </div>
    </div>
  );
}