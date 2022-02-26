import React from "react";
import {useTranslation} from "react-i18next";

import {appConfig} from "Constants";
import {WrapperContainer} from "Components";

import './Contact.scss'

const Contact = () => {
    const {t} = useTranslation();
    return (
        <WrapperContainer classes={['contact', 'container']}>
            <div className="contact__contact-section">
                <div className="col-6">
                    <p>
                        {t('inf_contact_description')}
                    </p>
                    <ul className="contact__icons contactCircles">
                        {appConfig.contact.contactIcons.map(({icon}) => <li>
                            {icon}
                        </li>)}
                    </ul>
                </div>
            </div>
        </WrapperContainer>
    );
};

export default Contact;
