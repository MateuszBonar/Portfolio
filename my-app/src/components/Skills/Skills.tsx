import React, {FC} from "react";
import {appConfig} from "Constants";
import {WrapperContainer} from "Components";
import {useTranslation} from "react-i18next";

const Skills: FC = (): JSX.Element => {
    const {t} = useTranslation()
    return (
        <WrapperContainer classes={['services', 'container']}>
            <div className="services__header">
                <div className="common">
                    <h3 className="heading">{t('inf_skills_main_header')}</h3>
                    <h1 className="mainHeader">{t('inf_skills_main_subheader')}</h1>
                    <p className="mainContent">{t('inf_skills_text')}</p>
                    <div className="commonBorder"/>
                </div>

                <div className="row bgMain">
                    {appConfig.skills.mySkills.map((info) => (
                        <div className="col-4 bgMain">
                            <div className="services__box">
                                {info.icon}
                                <div className="services__box-header">{info.heading}</div>
                                <div className="services__box-p">{info.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </WrapperContainer>
    );
};

export default Skills;