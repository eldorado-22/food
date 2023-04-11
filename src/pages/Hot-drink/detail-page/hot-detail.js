import React from 'react';
import {useSelector} from "react-redux";
import BurgerMenuTwo from "../../../components/Burger-Menu-Two/Burger-Menu-Two";
import {NavLink} from "react-router-dom";
import DetailBtn from "../../detail-page/DetailBtn";

const HotDetail = () => {
    const {basket} = useSelector(state => state)

    const {name,imageUrl,price} = basket
    return (
        <section id='detail'>
            <div className='container'>
                <BurgerMenuTwo/>
                <div className='detail'>
                    <div className='detail--img'>
                        <img className='mx-[30%]' src={imageUrl} alt="img"/>
                        <p>{name}</p>
                        <h2>{price}</h2>
                    </div>
                    <DetailBtn/>
                    <NavLink to={"/my-order"}>
                        <button className='detail--btn my-6'>ADD TO CART</button>
                    </NavLink>

                </div>
            </div>
        </section>
    );
};

export default HotDetail;