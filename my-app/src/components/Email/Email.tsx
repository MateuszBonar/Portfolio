import React, {FC} from "react";

import './Email.scss'
import {FaMapMarkerAlt} from "react-icons/fa";

const Email: FC = (): JSX.Element => {

    return (
        <div className="email">
            <div className="email__title-box">
                <p className="email__subheader">Może do mnie napiszesz?</p>
                <h3 className="email__header">Kontakt</h3>
                <p className="email__desc">lorem ipsum dwadadwadawdawa wadaw dwadwaawdawd</p>
            </div>
            <div className="email__contact-info">
                    <FaMapMarkerAlt  className="icon"/>
                <div className="email__contact-info-content">
                    <span>Locate us</span>
                    <p>King Street, Melboune Victoria</p>
                </div>
            </div>
        </div>
    )
}

export default Email;