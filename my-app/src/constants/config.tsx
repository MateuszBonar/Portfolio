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
        image: '',
        bannerIcons: [{
            icon: <FaFacebookF className='headerIcon'/>,
        }, {
            icon: <FaTwitter className='headerIcon'/>,
        }, {
            icon: <FaInstagram className='headerIcon'/>,
        }],
    },
    skills: {
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
        contactIcons: [{
            icon: <FaFacebookF className="contactIcon"/>,
        }, {
            icon: <FaTwitter className="contactIcon"/>,
        }, {
            icon: <FaInstagram className="contactIcon"/>,
        }],
    }
};