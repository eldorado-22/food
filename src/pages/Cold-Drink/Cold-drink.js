import React from 'react';
import "./cold-drink.scss";
import {NavLink, useNavigate} from "react-router-dom";
import {data} from "../../components/FakeBackend/FakeBackend";
import {useDispatch} from "react-redux";

const ColdDrink = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getBasket = (el) => {
        dispatch({type: "DATA_DETAIL", payload: el})
    }
    return (
        <section id="coldDrink">
            <div className="container">
                <h1 className="mx-1">Cold Drink</h1>
                <div className="coldDrink">
                    {data[3].map(el => {
                            return <div className="coldDrink--pepsi">
                                <div className="colds" onClick={() => {
                                getBasket(el)
                                navigate(`/cold-drink/${el.id}`)}
                                }>
                                    <div className="image"><img src={el.imageUrl} alt="img"/></div>
                                    <p>{el.name}</p>
                                    <span>{el.price}som</span>
                                </div>
                            </div>
                        })}
                </div>
            </div>
        </section>
    );
};

export default ColdDrink;