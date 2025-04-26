import React from 'react'
import StyledCard from '../common/StyledCard'
import mSand from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/81uv1Mxk1hL._AC_SL1500_.jpg'
import naturalSand from '../../assets/imgs/رمل الوان/رمل نقي طبيعي/رمل خشن طبيعي/رمل خشن اسود (2).jpg'
export default function TypesOfSand() {
  return (
    <div className="container py-4">
      <h2 className="text-center text-white mb-4">{'رمل الوان'}</h2>
      <div className="row">
      <StyledCard
        key={1}
        image={mSand}
        title={'رمل الوان صناعي'}
        link={`/category/sand/msand`}
      />
      <StyledCard
        key={2}
        image={naturalSand}
        title={'رمل نقي طبيعي'}
        link={`/category/sand/natural-sand`}
      />
      </div>
    </div>
  )
}
