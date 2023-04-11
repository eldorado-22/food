import React from 'react';
import './DetailPage.scss'
import {NavLink} from "react-router-dom";
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";
import {useDispatch, useSelector} from "react-redux";
import DetailBtn from "./DetailBtn";
import {data} from "../../components/FakeBackend/FakeBackend";


const DetailPage = () => {
    const {basket} = useSelector(state => state)
    const dispatch = useDispatch()
    const aDDorder = (order) => {
        dispatch({type: "ADD_ORDER", payload: order})
    }
    const {name,imageUrl,price} = basket

    return (
        <section id='detail'>
            <div className='container'>
                <BurgerMenuTwo/>
                <div className='detail'>
                    <div className='detail--img'>
                        <img src={imageUrl} alt="image"/>
                        <p>{name}</p>
                        <h2>{price}</h2>
                    </div>
                    <DetailBtn/>
                    <NavLink to={"/my-order"}>
                        <button onClick={() => aDDorder(data)} className='detail--btn my-6'>ADD TO CART</button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default DetailPage;