import React from 'react';
import "./cold-drink.scss";
import {cola, fanta, pepsi} from "../../components/FakeBackend/FakeBackend";
import {NavLink} from "react-router-dom";

const ColdDrink = () => {
    return (
        <section id="coldDrink">
            <div className="container">
                <h1 className="mx-1">Cold Drink</h1>
                <div className="coldDrink">
                    {
                        pepsi.map(el => {
                            return <div className="coldDrink--pepsi">
                                <NavLink to={"/cold-drink"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })
                    }
                    {
                        cola.map(el => {
                            return <div className="coldDrink--cola">
                                <NavLink to={"/cold-drink"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })
                    }
                    {
                        fanta.map(el => {
                            return <div className="coldDrink--fanta">
                                <NavLink to={"/cold-drink"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default ColdDrink;