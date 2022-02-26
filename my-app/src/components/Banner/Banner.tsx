import React, {FC} from 'react';
import {appConfig} from 'Constants';
import {WrapperContainer} from "Components/index";
import {useTranslation} from "react-i18next";


const Banner: FC = (): JSX.Element => {
    const {t} = useTranslation();
    const bannerIcons = <div className='header__content'>
        <div className='header__section'>
            <ul className='header__ul'>
                {appConfig.banner.bannerIcons.map(({icon}) => <li>
                    {icon}
                </li>)}
            </ul>
            <h1>{appConfig.banner.title}</h1>
            <p>{appConfig.banner.text}</p>
            <div className='header__buttons'>
                <a href='' className='btn btn-outline'>
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