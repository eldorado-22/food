import React from 'react';
import './Eastern-Cuisine.scss';
import {baklava, hummus, kanafeh, kofta, shashlik, shawarma} from "../../components/FakeBackend/FakeBackend";
import {NavLink} from "react-router-dom";

const EasternCuisine = () => {
    return (
        <section id="cuisine">
            <div className="container">
                <h1 className="mx-1">Eastern cuisine</h1>
                <div className="cuisine">
                    {baklava.map(el => {
                            return <div className="cuisine--baklava">
                                <NavLink to={"/detail-desert"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })}
                    {shawarma.map(el => {
                            return <div className="cuisine--shawarma">
                                <NavLink to={"/detail-desert"}>

                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })}
                    {shashlik.map(el => {
                            return <div className="cuisine--shashlik">
                                <NavLink to={"/detail-desert"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })}
                    {kofta.map(el => {
                            return <div className="cuisine--kofta">
                                <NavLink to={"/detail-desert"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })}
                    {hummus.map(el => {
                            return <div className="cuisine--hummus">
                                <NavLink to={"/detail-desert"}>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </NavLink>
                            </div>
                        })}
                    {kanafeh.map(el => {
                            return <div className="cuisine--kanafeh">
                                <NavLink to={"/detail-desert"}>
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

export default EasternCuisine;