import React, {FC} from "react";


const NavItem: FC<{ name: string, href: string}> = ({name, href}): JSX.Element =>
    <li>
        <a href={href}>{name}</a>
    </li>

export default NavItem;