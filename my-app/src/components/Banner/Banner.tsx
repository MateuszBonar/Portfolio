import React, {FC} from 'react';
import {useTranslation} from "react-i18next";

import {appConfig} from 'Constants';
import {WrapperContainer} from "Components/index";

import './Banner.scss'

const Banner: FC = (): JSX.Element => {
    const {t} = useTranslation();

    const bannerContent = <div className='banner__content'>
        <div className='banner__section'>
            <ul className='banner__ul'>
                {appConfig.banner.bannerIcons.map(({icon, link}) => <li>
                    <a href={link}>
                        {icon}
                    </a>
                </li>)}
            </ul>
            <h1>{t('inf_banner_title')}</h1>
            <p>{t('inf_banner_text')}</p>
            <div className='banner__buttons'>
                <a className='btn btn-outline'>
                    {t('inf_banner_my_cv')}
                </a>
            </div>
        </div>
    </div>;

    return (
        <WrapperContainer classes={['banner', 'container']} id="home">
            <div className="banner__wrapper" id="home">
                {bannerContent}
                <div className='banner__img'/>
            </div>
        </WrapperContainer>
    );
};

export default Banner;