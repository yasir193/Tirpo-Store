import React from 'react';
import StyledCard from '../common/StyledCard';
import blueSandImage from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/رمل ناعم  ازرق سماوي.jpg';
import purpleSandImage from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/رمل ناعم  بنفسجي.jpg';
import blueSandImage2 from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/رمل ناعم ازرق.jpg';
import whiteSandImage from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/رمل ناعم ابيض.jpg';
import redSandImage from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/رمل ناعم احمر.jpg';
import greenSandImage from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/رمل ناعم اخضر.jpg';
import purpleSandImage2 from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/رمل ناعم ارجواني.jpg';
import orangeSandImage from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/رمل ناعم لون اورنج.jpg';
import brownSandImage from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/رمل ناعم نقي  الوان صناعي.jpg';
import yellowSandImage from '../../assets/imgs/رمل الوان/رمل الوان صناعي/رمل ناعم/رمل ناعم اصفر.jpg';

export default function SmoothySand() {
  return (
    <div className="container py-4">
      <h2 className="text-center text-white mb-4">{'رمل ناعم'}</h2>
      <div className="row">
        <StyledCard
          image={blueSandImage}
          title={'رمل ناعم ازرق سماوي'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم ازرق سماوي'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={purpleSandImage}
          title={'رمل ناعم بنفسجي'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم بنفسجي'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={blueSandImage2}
          title={'رمل ناعم ازرق'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم ازرق'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={whiteSandImage}
          title={'رمل ناعم ابيض'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم ابيض'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={redSandImage}
          title={'رمل ناعم احمر'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم احمر'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={greenSandImage}
          title={'رمل ناعم اخضر'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم اخضر'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={purpleSandImage2}
          title={'رمل ناعم ارجواني'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم ارجواني'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={orangeSandImage}
          title={'رمل ناعم لون اورنج'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم لون اورنج'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={brownSandImage}
          title={'رمل ناعم بني'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم بني'}
          phoneNumber="+2001000178117"
        />
        <StyledCard
          image={yellowSandImage}
          title={'رمل ناعم اصفر'}
          whatsappMessage={'مرحبا، أود الاستفسار عن: رمل ناعم اصفر'}
          phoneNumber="+2001000178117"
        />
      </div>
    </div>
  );
}