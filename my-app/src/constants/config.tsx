import React from "react";
import {
    FaApple,
    FaCamera,
    FaCircleNotch,
    FaFacebookF,
    FaFileVideo,
    FaGithub,
    FaSearchDollar,
    FaLinkedin,
} from 'react-icons/fa';

export const appConfig = {
    banner: {
        image: '',
        bannerIcons: [{
            icon: <FaFacebookF className='headerIcon'/>,
            link: 'https://www.facebook.com/mateusz.bonar.1'
        }, {
            icon: <FaGithub className='headerIcon'/>,
            link: 'https://github.com/MateuszBonar'
        }, {
            icon: <FaLinkedin className='headerIcon'/>, link: 'https://www.linkedin.com/in/mateusz-bonar-98b923180/'
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
                heading: "inf_skills_2_heading",
                text: "inf_skills_1_text",
            }, {
                id: 3,
                icon: <FaCircleNotch className="commonIcons"/>,
                heading: "inf_skills_3_heading",
                text: "inf_skills_3_text",
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
            link: 'https://www.facebook.com/mateusz.bonar.1'
        }, {
            icon: <FaGithub className="contactIcon"/>,
            link: 'https://github.com/MateuszBonar'
        }, {
            icon: <FaLinkedin className="contactIcon"/>,
            link: 'https://www.linkedin.com/in/mateusz-bonar-98b923180/'
        }],
    }
};