import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';

import { appConfig } from 'Constants';
import { WrapperContainer } from 'Components';

import './Footer.scss';

const Footer: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <WrapperContainer classes={['footer', 'container']} id='footer'>
      <div className='footer__footer-section'>
        <div className='footer__footer-wrapper'>
          <Fade>
            <div className='footer__quote'>
              <p>
                {t('inf_contact_description')}
              </p>
              <p>
                {t('inf_contact_author')}
              </p>
            </div>
            <ul className='footer__icons contactCircles'>
              {appConfig.contact.contactIcons.map(({ icon }) => <li>
                {icon}
              </li>)}
            </ul>
          </Fade>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Footer;
