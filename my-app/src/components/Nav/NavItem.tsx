import React, {FC} from "react";


const NavItem: FC<{ name: string }> = ({name}): JSX.Element =>
    <li>
        <a href="">{name}</a>
    </li>

export default NavItem;