import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import BurgerMenuTwo from "../../../components/Burger-Menu-Two/Burger-Menu-Two";
import {NavLink} from "react-router-dom";
import DetailBtn from "../../detail-page/DetailBtn";

const HotDetail = () => {
    const {basket} = useSelector(state => state)
    const dispatch = useDispatch()
    const {name,imageUrl,price} = basket

    const addOrder = (el) =>{
        dispatch({type:"ADD_ORDER", payload: el})
    }
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
                        <button onClick={() => addOrder(basket)} className='detail--btn my-6'>ADD TO CART</button>
                    </NavLink>

                </div>
            </div>
        </section>
    );
};

export default HotDetail;