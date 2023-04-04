import React, {useState} from 'react';
import BurgerMenu from "../Burger-Menu/burger-menu";
import {IoMenu} from "react-icons/io5";
import './Burger-Menu-Two.scss';

const BurgerMenuTwo = () => {
    const [burger, setBurger] = useState(false)
    return (

        <div id="bMenuTwo">
            <div className="container">
                <BurgerMenu burger={burger} setBurger={setBurger}/>
                <div className="bMenuTwo">
                    <IoMenu className="bMenuTwo--icon" onClick={() => setBurger(true)}/>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenuTwo;