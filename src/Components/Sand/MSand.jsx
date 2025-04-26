import React from 'react'
import StyledCard from '../common/StyledCard'
import smoothySand from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/رمل ناعم اصفر.jpg'
import roughSand from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل خشن/رمل بينك خشن.jpg'
export default function mSand() {
  return <>
  
  
  
  
  
  
    <div className="container py-4">
      <h2 className="text-center text-white mb-4">{'رمل الوان صناعي'}</h2>
      <div className="row">
      <StyledCard
        key={1}
        image={smoothySand}
        title={'رمل ناعم'}
        link={`/category/sand/msand/smooth-sand`}
      />
      <StyledCard
        key={2}
        image={roughSand}
        title={'رمل خشن'}
        link={`/category/sand/msand/rough-sand`}
      />
      </div>
    </div>
  
  
  
  
  </>
}
