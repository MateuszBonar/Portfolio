import React, { FC } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

import { WrapperContainer } from 'Components';

import './Email.scss';

const Email: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <WrapperContainer classes={['email', 'container']} id='footer'>
      <div className='email__title-box'>
        <h3 className='email__header'>{t('inf_contact_title')}</h3>
        <p className='email__desc'>{t('inf_contact_subheader')}</p>
      </div>
      <div className='email__contact-info-wrapper'>
        <div className='email__contact-info'>
          <AiOutlinePhone className='icon' />
          <p>+ 48 783 410 651</p>
        </div>
        <div className='email__contact-info'>
          <AiOutlineMail className='icon' />
          <p>mateuszbonar1@gmail.com</p>
        </div>
        <div className='email__contact-info'>
          <FaMapMarkerAlt className='icon' />
          <p>Kostera 43, 28-114 Gnojno</p>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Email;
