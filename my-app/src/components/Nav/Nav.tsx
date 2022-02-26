import React, {FC, useState} from "react";
import {useTranslation} from "react-i18next";

import {FaAlignJustify} from "react-icons/fa";
import {navItems} from "./constants";
import NavItem from "./NavItem";

import './Nav.scss'

const Nav: FC = (): JSX.Element => {
    const [isNavVisible, setIsNavVisible] = useState<boolean>(true)

    const {t} = useTranslation()

    const toggleNav = (): void => {
        setIsNavVisible(!isNavVisible)
    }

    return (
        <nav className="navbar" id="home">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left"/>

                    <ul className="navbar__right">
                        {isNavVisible && navItems.map(({name, id,href}) => <NavItem key={id} name={t(name)} href={href}/>)}
                    </ul>
                </div>
            </div>
            <div className="toggle" onClick={toggleNav}>
                <FaAlignJustify/>
            </div>
        </nav>
    );
}

export default Nav;