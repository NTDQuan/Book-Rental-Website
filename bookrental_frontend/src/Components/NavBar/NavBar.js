import { Link } from "react-router-dom"
import React, { useState } from 'react';
import "./NavBar.css"
import Logo from '../../image/logo.png'
import ToolBar from "../ToolBar/ToolBar";



const NavBar = () => {
    return (
    <nav className="navbar">
        <div className="container">
            <div className="nav-elements">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/shop">BROWER</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT US</Link>
                    </li>
                </ul>
                <div className="toolbar">
                    <ToolBar/>
                </div>
            </div>
            

        </div>
        
    </nav>
    );
}

export default NavBar;