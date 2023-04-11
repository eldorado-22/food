import React from 'react';
import BurgerMenuTwo from "../../../components/Burger-Menu-Two/Burger-Menu-Two";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import DetailBtn from "../../detail-page/DetailBtn";


const DetailDesert = () => {
    const {basket} = useSelector(state => state)
    const {name,imageUrl,price} = basket
    const {order} = useSelector(state => state)


    return (
        <section id='detail'>
            <div className='container'>
                <BurgerMenuTwo/>
                <div className='detail'>
                    <div className='detail--img'>
                        <img src={imageUrl} alt=""/>
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

export default DetailDesert;