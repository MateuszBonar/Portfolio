import React, {FC} from "react";
import {appConfig} from "Constants";
import {WrapperContainer} from "Components";
import {useTranslation} from "react-i18next";

import './Skills.scss'

const Skills: FC = (): JSX.Element => {
    const {t} = useTranslation()
    return (
        <WrapperContainer classes={['skills', 'container']}>
            <div className="skills__header">
                <div className="skills__common">
                    <h3 className="heading">{t('inf_skills_main_header')}</h3>
                    <h1 className="mainHeader">{t('inf_skills_main_subheader')}</h1>
                    <p className="mainContent">{t('inf_skills_text')}</p>
                    <div className="commonBorder"/>
                </div>

                <div className="row bgMain">
                    {appConfig.skills.mySkills.map((info) => (
                        <div className="col-4 bgMain">
                            <div className="skills__box">
                                {info.icon}
                                <div className="skills__box-header">{info.heading}</div>
                                <div className="skills__box-p">{info.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </WrapperContainer>
    );
};

export default Skills;