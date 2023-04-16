import React from 'react';
import './Eastern-Cuisine.scss';
import {data} from "../../components/FakeBackend/FakeBackend";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const EasternCuisine = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getBasket = (el) => {
        dispatch({type: "DATA_DETAIL", payload: el})
    }
    return (
        <section id="cuisine">
            <div className="container">
                <h1 className="mx-1">Eastern cuisine</h1>
                <div className="cuisine">
                    {data[5].map(el => {
                            return <div className="cuisine--baklava">
                                <div className="eastern" onClick={() => {
                                getBasket(el)
                                navigate(`/Eastern-cuisine/${el.id}`)}
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

export default EasternCuisine;