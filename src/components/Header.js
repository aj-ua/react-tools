import logo from '../logo.png';

import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="navbar navbar-dark navbar-expand-md bg-dark text-white">
            <div className="container d-flex justify-content-between">
                <NavLink to="/" className="nav-link d-inline-flex align-items-center gap-2">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="logo" style={{ width: '40px' }} />
                    <span>Tools</span>
                </NavLink>
                <ul className="navbar-nav gap-2 fs-5">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Database</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/links" className="nav-link">Useful Links</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
