import React from 'react';
import './DetailPage.scss'
import {NavLink} from "react-router-dom";
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";
import {useSelector} from "react-redux";


const DetailPage = () => {
    const {basket} = useSelector(state => state)

    const {name,imageUrl,price} = basket

    return (
        <section id='detail'>
            <div className='container'>
                <BurgerMenuTwo/>
                <div className='detail'>
                    <h1>{name}</h1>
                    <img src={imageUrl} alt="image"/>
                    <h2>{price}</h2>
                    <NavLink to={"/my-order"}>
                        <button className='detail--btn my-6'>ADD TO CART</button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default DetailPage;