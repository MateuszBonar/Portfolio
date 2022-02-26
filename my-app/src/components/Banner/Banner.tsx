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
                {appConfig.banner.bannerIcons.map(({icon}) => <li>
                    {icon}
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

    const bannerImg = <div className='banner__img'>
        <img src="https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot2003/vadymvdrobot200300051/142744663-image-of-a-young-strong-happy-cheery-sports-man-posing-outdoors-in-nature-green-park-looking-camera-.jpg" alt='man'/>
    </div>;

    return (
        <WrapperContainer classes={['banner', 'container']}>
            <div className="banner__wrapper">
                {bannerContent}
                {bannerImg}
            </div>
        </WrapperContainer>
    );
};

export default Banner;