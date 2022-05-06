import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import Typewriter from 'typewriter-effect';
import {appConfig} from 'Constants';
import {WrapperContainer} from "Components";
import {Fade} from "react-awesome-reveal";

import './Banner.scss'

const Banner: FC = (): JSX.Element => {
    const {t} = useTranslation();

    const bannerContent = <Fade>
        <div className='banner__content'>
            <div className='banner__section'>
                <ul className='banner__ul'>
                    {appConfig.banner.bannerIcons.map(({icon, link}) => <li>
                        <a href={link}>
                            {icon}
                        </a>
                    </li>)}
                </ul>
                <h1>{t('inf_banner_title')}</h1>
                    <Typewriter
                    options={{
                        strings: [t('inf_banner_text'), t('inf_banner_text_1'), t('inf_banner_text_2'), t('inf_banner_text_3')],
                        autoStart: true,
                        loop: true,
                    }}
                />
                <div className='banner__buttons'>
                    <a className='btn btn-outline' href='/assets/CV_Mateusz_Bonar.pdf' download>
                        {t('inf_banner_my_cv')}
                    </a>
                </div>
            </div>
        </div>
    </Fade>;

    return (
        <WrapperContainer classes={['banner', 'container']} id="home">
            <div className="banner__wrapper">
                {bannerContent}
               <img src='/images/picture.jpg' alt='banner_img'/>
            </div>
        </WrapperContainer>
    );
};

export default Banner;