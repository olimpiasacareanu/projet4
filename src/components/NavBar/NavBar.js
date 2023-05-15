import React from 'react';
import { NavLink, Outlet} from 'react-router-dom';

const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <NavLink to ="/" className="navbar-brand" > Page d'accueil </NavLink>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to ="/pays"> La liste des pays </NavLink>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        <Outlet />
    </>
)

export default navbar