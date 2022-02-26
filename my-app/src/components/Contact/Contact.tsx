import React from "react";
import {useTranslation} from "react-i18next";

import {appConfig} from "Constants";
import {WrapperContainer} from "Components";

const Contact = () => {
    const {t} = useTranslation();
    return (
        <WrapperContainer classes={['contact', 'container']}>
            <div className="contactSection">
                <div className="row justifyConter">
                    <div className="col-6">
                        <p>
                            {t('inf_contact_description')}
                        </p>
                        <ul className="contactCircles">
                            {appConfig.contact.contactIcons.map(({icon}) => <li>
                                {icon}
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </WrapperContainer>
    );
};

export default Contact;
