import React, {FC, useState} from "react";
import {FaAlignJustify} from "react-icons/fa";
import {navItems} from "./constants";
import NavItem from "./NavItem";

import './Nav.scss'

const Nav: FC = (): JSX.Element => {
    const [isNavVisible, setIsNavVisible] = useState<boolean>(true)

    const toggleNav = (): void => {
        setIsNavVisible(!isNavVisible)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">

                    </ul>
                    <ul className="navbar__right">
                        {isNavVisible && navItems.map(({name, id}) => <NavItem key={id} name={name}/>)}
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