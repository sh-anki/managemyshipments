
import React from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <header id="header">
            <div className="inner">
                <Link to={'/'} className="logo">
                    <span className="symbol"><img src={logo} alt="FreightHubLogo" /></span><span className="title">Freight Hub</span>
                </Link>
            </div>
        </header>
    )
}
export default Header;