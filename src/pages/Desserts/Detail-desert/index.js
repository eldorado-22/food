import React from 'react';
import BurgerMenuTwo from "../../../components/Burger-Menu-Two/Burger-Menu-Two";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import DetailBtn from "../../detail-page/DetailBtn";


const DetailDesert = () => {
    const dispatch = useDispatch()
    const {basket} = useSelector(state => state)
    const {name,imageUrl,price,quantity} = basket
    const aDDOrder = (el) => {
        dispatch({type: "ADD_ORDER", payload: el})
    }

    return (
        <section id='detail'>
            <div className='container'>
                <BurgerMenuTwo/>
                <div className='detail'>
                    <div className='detail--img'>
                        <img src={imageUrl} alt=""/>
                        <p>{name}</p>
                        <h2>{price}som</h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <button>-</button>
                        <h1 className="text-3xl  px-3">{quantity}</h1>
                        <button>+</button>
                    </div>
                    <NavLink to={"/my-order"}>
                    <button onClick={() => aDDOrder(basket)} className='detail--btn my-6'>ADD TO CART</button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default DetailDesert;