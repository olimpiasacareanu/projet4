import React from 'react';
import { NavLink, Outlet} from 'react-router-dom';

const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Projet React - API REST</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to ="/" className="nav-link" > A propos </NavLink>
                        </li>
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