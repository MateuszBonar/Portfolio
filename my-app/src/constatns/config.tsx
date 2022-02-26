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
import React from "react";

export const appConfig = {
    banner: {
        title: 'I am Jonathan Doe',
        text:
            'i,m Jonathan, professional web developer with long time \
          experience in this field​',
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
        header: 'About Me',
        subHeader: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        text: 'Lorem Ipsum is simply dummy text of the printing and types',
        title: 'Hi There',
        about_1: 'In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui',
        about_2: 'In id nulla magna. Nullam posuere'
    },
    skills: {
        mainHeader: "SERVICES",
        subHeading: "My Services",
        text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting\
          industry. Lorem Ipsum standard dummy text.",
        mySkills: [{
            id: 1,
            icon: <FaGithub className="commonIcons"/>,
            heading: "Web Development",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
              industry. simply dummy",
        }, {
            id: 2,
            icon: <FaCamera className="commonIcons"/>,
            heading: "Photography",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy",
        }, {
            id: 3,
            icon: <FaCircleNotch className="commonIcons"/>,
            heading: "Web Desing",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy",
        }, {
            id: 4,
            icon: <FaApple className="commonIcons"/>,
            heading: "App Devlopment",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy",
        }, {
            id: 5,
            icon: <FaFileVideo className="commonIcons"/>,
            heading: "Video Editing",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy"
        }, {
            id: 6,
            icon: <FaSearchDollar className="commonIcons"/>,
            heading: "SEO Expert",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy",
        }]
    },
    contact: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
        contactIcons: [{
            icon: <FaFacebookF className="contactIcon" />,
        }, {
            icon: <FaTwitter className="contactIcon" />,
        }, {
            icon: <FaInstagram className="contactIcon" />,
        }],
    }
};