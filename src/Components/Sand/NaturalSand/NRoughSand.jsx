import React from 'react'
import whiteSand from '../../../assets/imgs/رمل الوان/رمل نقي طبيعي/رمل خشن طبيعي/رمل ابيض خشن (2).jpg'
import crystalWhiteSand from '../../../assets/imgs/رمل الوان/رمل نقي طبيعي/رمل خشن طبيعي/رمل ابيض خشن كرستالي  (3).jpg'
import crystalYellowSand2 from '../../../assets/imgs/رمل الوان/رمل نقي طبيعي/رمل خشن طبيعي/رمل اصفر خشن كريستالي (2).jpg'
import crystalYellowSand from '../../../assets/imgs/رمل الوان/رمل نقي طبيعي/رمل خشن طبيعي/رمل اصفر خشن كريستالي.jpg'
import blackSand from '../../../assets/imgs/رمل الوان/رمل نقي طبيعي/رمل خشن طبيعي/رمل خشن اسود (2).jpg'
import peachSand from '../../../assets/imgs/رمل الوان/رمل نقي طبيعي/رمل خشن طبيعي/رمل خشن لون خوخي طبيعي.jpg'
import StyledCard from '../../common/StyledCard';

export default function NRoughSand() {
  return <>
  
  <div className="container py-4">
      <h2 className="text-center text-white mb-4">{'رمل خشن'}</h2>
      <div className="row">
        <StyledCard
          image={whiteSand}
          title={'رمل ابيض خشن'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ابيض خشن'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={crystalWhiteSand}
          title={'رمل ابيض خشن كريستالي'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ابيض خشن كريستالي'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={crystalYellowSand2}
          title={'رمل اصفر خشن كريستالي'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل اصفر خشن كريستالي'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={crystalYellowSand}
          title={'رمل اصفر خشن كريستالي'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل اصفر خشن كريستالي'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={blackSand}
          title={'رمل خشن اسود'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل خشن اسود'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={peachSand}
          title={'رمل خشن لون خوخي طبيعي'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل خشن لون خوخي طبيعي'}
          phoneNumber="+2001000178117"
        />
      </div>
  </div>
  </>
}
