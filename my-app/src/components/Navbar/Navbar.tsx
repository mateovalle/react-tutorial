import {NavLink} from "react-router-dom";
import './Navbar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse, faUserGroup, faMagnifyingGlass, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../Redux/actions/actions.tsx";
import {State} from "../../Redux/store.tsx";

export default function Navbar() {
    const  token = useSelector((state: State) => {return state.session.token})
    const dispatch = useDispatch()

    if (token === '') {
        console.log('token null')
        return null
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return(
        <div className={"navbar"}>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to={"/home"} >
                        {<FontAwesomeIcon icon={faHouse} />}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"search"}>{<FontAwesomeIcon icon={faMagnifyingGlass}/>}</NavLink>
                </li>
                <li>
                    <NavLink to="profiles">{<FontAwesomeIcon icon={faUserGroup} />}</NavLink>
                </li>
                <li>
                    <button onClick={handleLogout}>{<FontAwesomeIcon icon={faRightFromBracket} />}</button>
                </li>
            </ul>
        </div>
    );
}
