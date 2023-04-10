import React from 'react';
import BurgerMenuTwo from "../../../components/Burger-Menu-Two/Burger-Menu-Two";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


const DetailDesert = () => {
    const {basket} = useSelector(state => state)
    const {name,imageUrl,price} = basket

    return (
        <section id='detail'>
            <div className='container'>
                <BurgerMenuTwo/>
                <div className='detail'>

                    <img src={imageUrl} alt=""/>
                    <h1>{name}</h1>
                    <h2>{price}</h2>

                    <NavLink to={"/my-order"}>
                        <button className='detail--btn my-6'>ADD TO CART</button>
                    </NavLink>

                </div>
            </div>
        </section>
    );
};

export default DetailDesert;