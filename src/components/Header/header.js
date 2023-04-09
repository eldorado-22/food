import React, {useState} from 'react';
import './header.scss';
import {IoMenu} from "react-icons/io5";
import user from './../../assets/img/users.png'
import BurgerMenu from "../Burger-Menu/burger-menu";
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const navigate = useNavigate()

    const [burger, setBurger] = useState(false)
    const {account} = useSelector(state => state)
    let name = 'fff'

    account.map(el => {
        if (el.inAcc){
            name = el.name
        }
    })
    return (
        <header id="header">
            <BurgerMenu burger={burger} setBurger={setBurger}/>
            <div className="container">
                <div className="header d-flex align-items-center justify-between">
                    <IoMenu className="header--burger" onClick={() => setBurger(true)}/>
                    <NavLink to={"/"}>
                        <h1 className="text text-3xl text-black">Home</h1>
                    </NavLink>
                    <div onClick={()=> navigate('/settings')} className='header--user'>
                        <p>{name[0].toUpperCase()}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;