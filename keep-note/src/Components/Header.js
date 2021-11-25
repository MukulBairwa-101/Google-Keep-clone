import React from 'react'
import Logo from "../img/Logo.jpg";
import SortIcon from '@material-ui/icons/Sort';

import "../Scss/Header.scss";

const Header = () => {
    return (
        <div className="Header">
            <div className="logo-section">
                <img src={Logo}alt="logo" />
            </div>
            <div >
                <SortIcon className="menu-icon" />
            </div>
        
        </div>
    )
}

export default Header;
