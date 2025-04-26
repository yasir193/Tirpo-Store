import React from 'react'
import StyledCard from '../../common/StyledCard';
import smoothySand from '../../../assets/imgs/رمل الوان/رمل نقي طبيعي/رمل طبيعي ناعم/رمل ناعم طبيعي لون ابيض (3).jpg';
import roughSand from '../../../assets/imgs/رمل الوان/رمل نقي طبيعي/رمل خشن طبيعي/رمل اصفر خشن كريستالي.jpg'
export default function NaturalSand() {
  return <>
  
  
  
  <div className="container py-4">
      <h2 className="text-center text-white mb-4">{'رمل نقي طبيعي'}</h2>
      <div className="row">
      <StyledCard
        image={smoothySand}
        title={'رمل ناعم'}
        link={`/category/sand/natural-sand/smooth-sand`}
      />
      <StyledCard
        image={roughSand}
        title={'رمل خشن'}
        link={`/category/sand/natural-sand/rough-sand`}
      />
      </div>
    </div>
  
  
  
  </>
}
