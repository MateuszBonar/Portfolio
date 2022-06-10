import React, {FC} from "react";

export type NavItemType = { name: string, href: string, handleClick?: () =>  void}

const NavItem: FC<NavItemType> = ({name, href,handleClick}): JSX.Element =>
    <li>
        <a href={href} onClick={handleClick && handleClick}>{name}</a>
    </li>

export default NavItem;