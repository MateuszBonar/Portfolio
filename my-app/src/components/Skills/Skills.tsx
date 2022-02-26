import React, {FC} from "react";
import {appConfig} from "../../constatns";

const Skills: FC = (): JSX.Element => {
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading">{appConfig.skills.mainHeader}</h3>
                        <h1 className="mainHeader">{appConfig.skills.subHeading}</h1>
                        <p className="mainContent">{appConfig.skills.text}</p>
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
            </div>
        </div>
    );
};

export default Skills;