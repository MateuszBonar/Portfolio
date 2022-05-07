import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { WrapperContainer } from 'Components';

import './About.scss';
import { Fade } from 'react-awesome-reveal';

const About: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <WrapperContainer classes={['about', 'container']} id='about'>
      <div>
        <Fade>
          <div className='about__info'>
            <h1>{t('inf_about_me_title')}</h1>
            <div className='about__info-p1'>
              {t('inf_about_me_about_1')}
            </div>
            <div className='about__info-p2'>
              {t('inf_about_me_about_2')}
            </div>
          </div>
        </Fade>
      </div>
    </WrapperContainer>
  );
};

export default About;