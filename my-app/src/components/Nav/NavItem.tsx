import React, {FC} from "react";


const NavItem: FC<{ name: string, href: string, handleClick: () =>  void}> = ({name, href,handleClick}): JSX.Element =>
    <li>
        <a href={href} onClick={handleClick}>{name}</a>
    </li>

export default NavItem;