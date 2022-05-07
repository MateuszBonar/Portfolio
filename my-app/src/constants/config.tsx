import React from 'react';
import {
  FaReact,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { RiHtml5Fill } from 'react-icons/ri';
import { DiCss3 } from 'react-icons/di';

export const appConfig = {
  banner: {
    image: '',
    bannerIcons: [{
      icon: <FaFacebookF className='headerIcon' />,
      link: 'https://www.facebook.com/mateusz.bonar.1',
    }, {
      icon: <FaGithub className='headerIcon' />,
      link: 'https://github.com/MateuszBonar',
    }, {
      icon: <FaLinkedin className='headerIcon' />, link: 'https://www.linkedin.com/in/mateusz-bonar-98b923180/',
    }],
  },
  skills: {
    mySkills: [
      {
        id: 1,
        icon: <FaGithub className='commonIcons' />,
        heading: 'inf_skills_1_heading',
        text: 'inf_skills_1_text',
      },
      {
        id: 2,
        icon: <FaReact className='commonIcons' />,
        heading: 'inf_skills_2_heading',
        text: 'inf_skills_2_text',
      }, {
        id: 3,
        icon: <SiJavascript className='commonIcons' />,
        heading: 'inf_skills_3_heading',
        text: 'inf_skills_3_text',
      }, {
        id: 4,
        icon: <SiTypescript className='commonIcons' />,
        heading: 'inf_skills_4_heading',
        text: 'inf_skills_4_text',
      }, {
        id: 5,
        icon: <RiHtml5Fill className='commonIcons' />,
        heading: 'inf_skills_5_heading',
        text: 'inf_skills_5_text',
      }, {
        id: 6,
        icon: <DiCss3 className='commonIcons' />,
        heading: 'inf_skills_6_heading',
        text: 'inf_skills_6_text',
      }],
  },
  contact: {
    contactIcons: [{
      icon: <FaFacebookF className='contactIcon' />,
      link: 'https://www.facebook.com/mateusz.bonar.1',
    }, {
      icon: <FaGithub className='contactIcon' />,
      link: 'https://github.com/MateuszBonar',
    }, {
      icon: <FaLinkedin className='contactIcon' />,
      link: 'https://www.linkedin.com/in/mateusz-bonar-98b923180/',
    }],
  },
  projects: [
    {
      tags: ['React', 'Typescript', 'Antd-design', 'RapidApi'],
      img: 'https://img.pakamera.net/i1/7/954/obrazy-i-plakaty-12320957_8726585954.jpg',
      title: 'CryptoApp - Crypto currency checker',
      link: 'https://github.com/MateuszBonar/CryptoApp',
      desc: 'Jest to projekt który porusza wykorzystanie RapidApi i Antd-design. Projekt został stworzony w React i Typescript. Pozwala na podgląd aktyalnych kursów krupotwalut, wykresy oraz najnowsze informacje.',
    },
    {
      tags: ['React', 'Typescript', 'Boostrap', 'Redux'],
      img: 'https://img.pakamera.net/i1/7/954/obrazy-i-plakaty-12320957_8726585954.jpg',
      title: 'ToDoApp - ToDo list',
      link: 'https://github.com/MateuszBonar/TodoApp-React-Redux',
      desc: 'Jest to projekt który porusza wykorzystanie Redux Dev Toolkit i framework Boostrap. Projekt został stworzony w React i Typescript. Aplikacja pozwala na zmianę języka filtrowanie, dodawanie, usuwanie i sortowanie listy rzeczy do zrobienia.',
    },
    {
      tags: ['React', 'Typescript', 'E-commerce'],
      img: 'https://img.pakamera.net/i1/7/954/obrazy-i-plakaty-12320957_8726585954.jpg',
      title: 'EcommerceApp - E-commerce',
      link: 'https://github.com/MateuszBonar/EcommerceApp',
      desc: 'Jest to projekt który wykorzystuje Redux Dev Toolkit i oraz framework e-commerce. Projekt został stworzony w React i Typescript. Aplikacja pozwala na wybór produktów z api i uzupełnienie koszyka.',
    },
  ],
};