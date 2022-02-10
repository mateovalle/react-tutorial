import {NavLink} from "react-router-dom";
import './Navbar.css';
import React from 'react';

export default function Navbar() {
    return(
        <div className={"navbar"}>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/" >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="profiles">Profiles</NavLink>
                </li>
            </ul>
        </div>
    );
}