import React, {useState} from 'react';
import './header.scss';
import {IoMenu} from "react-icons/io5";
import user from './../../assets/img/users.png'
import BurgerMenu from "../Burger-Menu/burger-menu";
const Header = () => {
    const [burger, setBurger] = useState(false)

    return (
        <header id="header">
            <BurgerMenu burger={burger} setBurger={setBurger}/>
            <div className="container">
                <div className="header d-flex align-items-center justify-between">
                    <IoMenu className="header--burger" onClick={() => setBurger(true)}/>
                    <h1 className="text text-3xl text-black">Home</h1>
                    <img src={user} alt="img"/>
                </div>
            </div>
        </header>
    );
};

export default Header;