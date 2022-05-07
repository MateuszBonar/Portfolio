import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

import { appConfig } from 'Constants';
import { WrapperContainer } from 'Components';

import './Skills.scss';

const Skills: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <WrapperContainer classes={['skills', 'container']} id='skills'>
      <div className='skills__header'>
        <div className='skills__common'>
          <h3>{t('inf_skills_main_header')}</h3>
          <h1>{t('inf_skills_main_subheader')}</h1>
          <p>{t('inf_skills_text')}</p>
        </div>

        <Fade>
          <div className='skills__cards'>
            {appConfig.skills.mySkills.map((info) => (
              <div className='skills__wrapper-box'>
                <div className='skills__box'>
                  {info.icon}
                  <div className='skills__box-header'>{t(info.heading)}</div>
                  <div className='skills__box-p'>{t(info.text)}</div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </WrapperContainer>
  );
};

export default Skills;