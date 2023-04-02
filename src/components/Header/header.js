import React from 'react';
import './header.scss';
import {IoMenu} from "react-icons/io5";
import user from './../../assets/img/users.png'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header d-flex align-items-center justify-between">
                    <IoMenu className="header--burger"/>
                    <NavLink to={"/"}>
                        <h1 className="text text-3xl text-black">Home</h1>
                    </NavLink>
                    <img src={user} alt="img"/>
                </div>
            </div>
        </header>
    );
};

export default Header;