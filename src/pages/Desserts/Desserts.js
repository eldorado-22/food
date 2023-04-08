import React from 'react';
import './desserts.scss';
import {
    biscuit,
    ice,
    macarons,
    sanSebastian,
    strawberry,
    strawberryCake
} from "../../components/FakeBackend/FakeBackend";
import {NavLink} from "react-router-dom";

const Desserts = () => {
        return (
            <section id="desserts">
                <div className="container">
                    <h1 className="mx-1">Desserts</h1>
                    <div className="desserts">
                        {
                            strawberry.map(el => {
                                return <div className="desserts--straw">
                                    <NavLink to={"/detail-desert"}>
                                        <img src={el.imageUrl} alt="img"/>
                                        <p>{el.name}</p>
                                        <span>{el.price}</span>
                                    </NavLink>
                                </div>
                            })
                        }
                        {
                            biscuit.map(el => {
                                return <div className="desserts--biscuit">
                                    <NavLink to={"/detail-desert"}>

                                        <img src={el.imageUrl} alt="img"/>
                                        <p>{el.name}</p>
                                        <span>{el.price}</span>
                                    </NavLink>
                                </div>
                            })
                        }
                        {
                            ice.map(el => {
                                return <div className="desserts--ice">
                                    <NavLink to={"/detail-desert"}>
                                        <img src={el.imageUrl} alt="img"/>
                                        <p>{el.name}</p>
                                        <span>{el.price}</span>
                                    </NavLink>
                                </div>
                            })
                        }
                        {
                            strawberryCake.map(el => {
                                return <div className="desserts--strawberryCake">
                                    <NavLink to={"/detail-desert"}>
                                        <img src={el.imageUrl} alt="img"/>
                                        <p>{el.name}</p>
                                        <span>{el.price}</span>
                                    </NavLink>
                                </div>
                            })
                        }
                        {
                            macarons.map(el => {
                                return <div className="desserts--macarons">
                                    <NavLink to={"/detail-desert"}>
                                        <img src={el.imageUrl} alt="img"/>
                                        <p>{el.name}</p>
                                        <span>{el.price}</span>
                                    </NavLink>
                                </div>
                            })
                        }
                        {
                            sanSebastian.map(el => {
                                return <div className="desserts--sanSebastian">
                                    <NavLink to={"/detail-desert"}>
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
    }
;

export default Desserts;