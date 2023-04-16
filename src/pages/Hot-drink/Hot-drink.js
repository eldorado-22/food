import React from 'react';
import './Hot-drink.scss';
import {
    data
} from "../../components/FakeBackend/FakeBackend";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const HotDrink = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getBasket = (el) => {
        dispatch({type: "DATA_DETAIL", payload: el})
    }
    return (<section id="hotDrink">
        <div className="container">
            <h1 className="mx-1">Hot Drink</h1>
            <div className="hotDrink">
                {data[4].map(el => {
                    return <div className="hotDrink--tea">
                        <div className="hots" onClick={() => {
                        getBasket(el)
                        navigate(`/hot-drink/${el.id}`)}
                        }>
                            <div className="image"><img src={el.imageUrl} alt="img"/></div>
                            <p>{el.name}</p>
                            <span>{el.price}som</span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </section>);
};

export default HotDrink;