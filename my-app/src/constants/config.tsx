import React from "react";
import {
    FaApple,
    FaCamera,
    FaCircleNotch,
    FaFacebookF,
    FaFileVideo,
    FaGithub,
    FaInstagram, FaSearchDollar,
    FaTwitter
} from 'react-icons/fa';

export const appConfig = {
    banner: {
        title: 'inf_banner_title',
        text:
            'inf_banner_text',
        image: '',
        bannerIcons: [{
            icon: <FaFacebookF className='headerIcon'/>,
        }, {
            icon: <FaTwitter className='headerIcon'/>,
        }, {
            icon: <FaInstagram className='headerIcon'/>,
        }],
    },
    about: {
        header: 'inf_about_me_header',
        subHeader: 'inf_about_me_subheader',
        text: 'inf_about_me_text',
        title: 'inf_about_me_title',
        about_1: 'inf_about_me_about_1',
        about_2: 'inf_about_me_about_2'
    },
    skills: {
        mainHeader: "inf_skills_main_header",
        subHeading: "inf_skills_main_subheader",
        text: "inf_skills_text",
        mySkills: [
            {
                id: 1,
                icon: <FaGithub className="commonIcons"/>,
                heading: "inf_skills_1_heading",
                text: "inf_skills_1_text",
            },
            {
                id: 2,
                icon: <FaCamera className="commonIcons"/>,
                heading: "inf_skills_1_heading",
                text: "inf_skills_1_text",
            }, {
                id: 3,
                icon: <FaCircleNotch className="commonIcons"/>,
                heading: "inf_skills_1_heading",
                text: "inf_skills_1_text",
            }, {
                id: 4,
                icon: <FaApple className="commonIcons"/>,
                heading: "inf_skills_1_heading",
                text: "inf_skills_1_text",
            }, {
                id: 5,
                icon: <FaFileVideo className="commonIcons"/>,
                heading: "inf_skills_1_heading",
                text: "inf_skills_1_text",
            }, {
                id: 6,
                icon: <FaSearchDollar className="commonIcons"/>,
                heading: "inf_skills_1_heading",
                text: "inf_skills_1_text",
            }]
    },
    contact: {
        description: 'inf_contact_description',
        contactIcons: [{
            icon: <FaFacebookF className="contactIcon"/>,
        }, {
            icon: <FaTwitter className="contactIcon"/>,
        }, {
            icon: <FaInstagram className="contactIcon"/>,
        }],
    }
};