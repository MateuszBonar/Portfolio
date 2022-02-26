import React from 'react';
import {appConfig} from "../../constatns";

const About = () => {

  const man = <img src='/images/man-01.png' alt='man' />

  return (
    <div className='about'>
      <div className='container'>
        <div className='common'>
          <h1 className='mainHeader'>{appConfig.about.subHeader}</h1>
          <p className='mainContent'>{appConfig.about.text}</p>
          <div className='commonBorder'/>
        </div>
        <div className='row  h-650 alignCenter'>
          <div className='col-6'>
            <div className='about__img'>
              {man}
            </div>
          </div>
          <div className='col-6'>
            <div className='about__info'>
              <h1>{appConfig.about.title}</h1>
              <div className='about__info-p1'>
                {appConfig.about.about_1}
              </div>
              <div className='about__info-p2'>
                {appConfig.about.about_2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;