import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FaAlignJustify } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { navItems } from './constants';
import NavItem from './NavItem';
import { bemClass } from 'Utils/functions';

import './Nav.scss';

const MOBILE_BREAKPOINT = 768;

const Nav: FC = (): JSX.Element => {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const { t } = useTranslation();

  const toggleNav = (): void => {
    setIsNavVisible(!isNavVisible);
  };

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const nav: JSX.Element = <div className={bemClass('navbar__container', { mobile: isNavVisible, desktop: !isMobile })}>
    <ul>
      {navItems.map(({ name, id, href }) =>
        <NavItem key={id} name={t(name)} href={href}
                 handleClick={isMobile ? toggleNav : undefined} />)}
    </ul>
    <div>

    </div>
  </div>;

  return (
    <nav className='navbar' id='home'>
      <div className='container'>
        {nav}
      </div>
      {isMobile &&
        <div className='burger' onClick={toggleNav}>
          {isNavVisible ? <AiOutlineClose /> : <FaAlignJustify />}
        </div>
      }
    </nav>
  );
};

export default Nav;