import React, {FC} from "react";
import { FaAlignJustify } from "react-icons/fa";

const Nav:FC = (): JSX.Element => {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <img src="" alt="logo" />
                        </div>
                    </ul>
                    {state ? (
                        <ul className="navbar__right">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Skills</a>
                            </li>
                            <li>
                                <a href="">Portfolio</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
            </div>
        </nav>
    );
}

export default Nav;