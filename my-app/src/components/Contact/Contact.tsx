import React from "react";
import {appConfig} from "../../constatns";

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contactSection">
                    <div className="row justifyConter">
                        <div className="col-6">
                            <p>
                                {appConfig.contact.description}
                            </p>
                            <ul className="contactCircles">
                                {appConfig.contact.contactIcons.map(({icon}) => <li>
                                    {icon}
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
