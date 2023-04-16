import React from 'react';
import './DetailPage.scss'
import {NavLink} from "react-router-dom";
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";
import {useDispatch, useSelector} from "react-redux";
import {data} from "../../components/FakeBackend/FakeBackend";


const DetailPage = () => {
    const dispatch = useDispatch()
    const {basket} = useSelector(state => state)
    const {name, imageUrl, price, quantity} = basket

    console.log(quantity)
    const aDDOrder = (el) => {
        dispatch({type: "ADD_ORDER", payload: el})
    }

    const addPrice = () =>{
        return price + price
    }
    return (
        <section id='detail'>
            <div className='container'>
                <BurgerMenuTwo/>
                <div className='detail'>
                    <div className='detail--img'>
                        <img src={imageUrl} alt="image"/>
                        <p>{name}</p>
                        <h2>{price}som</h2>
                        <div className="flex items-center justify-center">
                            <button>-</button>
                            <h1 className="text-3xl  px-3">{quantity}</h1>
                            <button onClick={() => aDDOrder(basket)}>+</button>
                        </div>
                    </div>
                    <div>
                    </div>
                    <NavLink to={"/my-order"}>
                        <button onClick={() => aDDOrder(basket)} className='detail--btn my-6'>ADD TO CART</button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default DetailPage;