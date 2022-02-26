import React from "react";
import {useTranslation} from "react-i18next";

import {appConfig} from "Constants";
import {WrapperContainer} from "Components";

import './Contact.scss'

const Contact = () => {
    const {t} = useTranslation();
    return (
        <WrapperContainer classes={['contact', 'container']} id="contact">
            <div className="contact__contact-section">
                <div className="contact__section-wrapper">
                    <div className="contact__quote">
                        <p>
                            {t('inf_contact_description')}
                        </p>
                        <p>
                            {t('inf_contact_author')}
                        </p>
                    </div>
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
