import React, {FC} from 'react';
import {useTranslation} from "react-i18next";

import {appConfig} from 'Constants';
import {WrapperContainer} from "Components/index";

import './Banner.scss'

const Banner: FC = (): JSX.Element => {
    const {t} = useTranslation();
    const bannerIcons = <div className='header__content'>
        <div className='header__section'>
            <ul className='header__ul'>
                {appConfig.banner.bannerIcons.map(({icon}) => <li>
                    {icon}
                </li>)}
            </ul>
            <h1>{t('inf_banner_title')}</h1>
            <p>{t('inf_banner_text')}</p>
            <div className='header__buttons'>
                <a className='btn btn-outline'>
                    {t('inf_banner_my_cv')}
                </a>
            </div>
        </div>
    </div>;

    const bannerImg = <div className='banner__img'>
        <img src={appConfig.banner.image} alt='man'/>
    </div>;

    return (
        <WrapperContainer classes={['header', 'container']}>
            <div className='row'>
                <div className='col-6'>
                    {bannerIcons}
                </div>
                <div className='col-6'>
                    {bannerImg}
                </div>
            </div>
        </WrapperContainer>
    );
};

export default Banner;