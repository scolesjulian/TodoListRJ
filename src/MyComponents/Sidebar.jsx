import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar bg-light" height="100vh">
            <ul className="ul">
                <li className="li">
                    <NavLink id="a" to="login" exact className="text-dark rounded py-2 w-100 d-inline-block" activeClassName="active"><FaIcons.FaLockOpen className="me-3"/> Login</NavLink>
                </li>
                <li className="li">
                    <NavLink id="a" to="/" exact className="text-dark rounded py-2 w-100 d-inline-block" activeClassName="active"><FaIcons.FaHome className="me-3"/> Home</NavLink>
                </li>
                <li className="li">
                    <NavLink id="a" to="about" exact className="text-dark rounded py-2 w-100 d-inline-block" activeClassName="active"><FaIcons.FaAccessibleIcon className="me-3"/> About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;