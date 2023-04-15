import React from 'react';
import './Pizza.scss';
import {
    data
} from "../../components/FakeBackend/FakeBackend";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const Pizza = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getBasket = (el) => {
        dispatch({type: "DATA_DETAIL", payload: el})
    }
    return (
        <section id="pizza">
            <div className="container">
                <h1 className="mx-1">Pizza</h1>
                <div className="pizza">
                    {data[2].map(el => {
                            return <div className="pizza--margarito">
                                <div className="pizzaFood" onClick={() => {
                                    getBasket(el)
                                    navigate(`/detail-pizza/${el.id}`)
                                }
                                }>
                                    <img src={el.imageUrl} alt="img"/>
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

export default Pizza;