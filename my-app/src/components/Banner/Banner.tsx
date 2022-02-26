import React, {FC} from "react";
import { appConfig } from '../../constatns';


const Banner:FC = ():JSX.Element => {

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    {appConfig.banner.bannerIcons.map( ({ icon }) => <li>
                                        {icon}
                                    </li>)}
                                </ul>
                                <h1>{appConfig.banner.title}</h1>
                                <p>{appConfig.banner.text}</p>
                                <div className="header__buttons">
                                    <a href="" className="btn btn-outline">
                                        My Portfolio
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src={appConfig.banner.image} alt="man" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Banner;