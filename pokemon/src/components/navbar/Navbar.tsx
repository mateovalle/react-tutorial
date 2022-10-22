import {NavLink} from "react-router-dom";
import { Icon } from '@iconify/react';
import './Navbar.css'



const Navbar = () => {
    return(
        <div className={"navbar"}>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to={"/"} >
                        {<Icon icon="mdi:pokeball" />}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/items"}>{<Icon icon="fluent:backpack-24-regular" />}</NavLink>
                </li>
                <li>
                    <NavLink to={"/favourites"}>{<Icon icon="akar-icons:star" />}</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;