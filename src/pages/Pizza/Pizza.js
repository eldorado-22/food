import React from 'react';
import './Pizza.scss';
import {italian, margarito, pepperoni, monopoly, homemade,hawaiana} from "../../components/FakeBackend/FakeBackend";
import {NavLink} from "react-router-dom";

const Pizza = () => {
    return (
        <section id="pizza">
            <div className="container">
                <h1 className="mx-1">Pizza</h1>
                <div className="pizza">
                    {margarito.map(el => {
                            return <div className="pizza--margarito">
                                <NavLink to={"/detail-pizza"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })}

                    {pepperoni.map(el => {
                            return <div className="pizza--pepperoni">
                                <NavLink to={"/detail-pizza"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })}

                    {italian.map(el => {
                            return <div className="pizza--italian">
                                <NavLink to={"/detail-pizza"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })}

                    {monopoly.map(el => {
                            return <div className="pizza--monopoly">
                                <NavLink to={"/detail-pizza"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })}

                    {homemade.map(el => {
                            return <div className="pizza--homemade">
                                <NavLink to={"/detail-pizza"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })}

                    {hawaiana.map(el => {
                            return <div className="pizza--hawaiana">
                                <NavLink to={"/detail-pizza"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })}
                </div>
            </div>
        </section>
    );
};

export default Pizza;