import React, {FC} from 'react';
import {appConfig} from "Constants";
import {MyPicture, WrapperContainer} from "Components";
import {useTranslation} from "react-i18next";

const About: FC = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <WrapperContainer classes={['about', 'container']}>
            <div className='common'>
                <h1 className='mainHeader'>{t(appConfig.about.subHeader)}</h1>
                <p className='mainContent'>{t(appConfig.about.text)}</p>
                <div className='commonBorder'/>
            </div>
            <div className='row  h-650 alignCenter'>
                <div className='col-6'>
                    <div className='about__img'>
                        <MyPicture/>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='about__info'>
                        <h1>{t(appConfig.about.title)}</h1>
                        <div className='about__info-p1'>
                            {t(appConfig.about.about_1)}
                        </div>
                        <div className='about__info-p2'>
                            {t(appConfig.about.about_2)}
                        </div>
                    </div>
                </div>
            </div>
        </WrapperContainer>
    );
};

export default About;