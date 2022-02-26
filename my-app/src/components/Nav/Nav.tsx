import React, {FC, useState} from "react";
import {FaAlignJustify} from "react-icons/fa";
import {navItems} from "./constants";
import NavItem from "./NavItem";

const Nav: FC = (): JSX.Element => {
    const [isNavVisible, setIsNavVisible] = useState<boolean>(true)

    const logo = <div className="navbar__left-logo">
        <img src="" alt="logo"/>
    </div>

    const toggleNav = (): void => {
        setIsNavVisible(!isNavVisible)
    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        {logo}
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