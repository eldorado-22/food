import React from 'react';
import './National-Foods.scss';
import {Link} from "react-router-dom";
import {beshbarmak, kuurdak, lagman, olobo,many, soup} from "../FakeBackend/FakeBackend";

const NationalFoods = () => {
        return (
            <section id="national">
                <div className='container'>
                    <div className='national'>
                        <h1 className='mx-1'>National Foods</h1>
                        <div className='national--group'>
                            {
                                beshbarmak.map(el => {
                                    return <div className="national--group__fiveB">
                                        <Link to={"/detail-page"}>
                                            <img src={el.imageUrl} alt="img"/>
                                            <p>{el.name}</p>
                                            <span>{el.price}</span>
                                        </Link>

                                    </div>
                                })
                            }
                            {
                                many.map(el => {
                                    return <div className="national--group__manty">
                                        <Link to={"/detail-page"}>
                                            <img src={el.imageUrl} alt="img"/>
                                            <p>{el.name}</p>
                                            <span>{el.price}</span>
                                        </Link>
                                    </div>
                                })
                            }
                            {
                                kuurdak.map(el => {
                                    return <div className="national--group__kuurdak">
                                        <Link to={"/detail-page"}>
                                            <img src={el.imageUrl} alt="img"/>
                                            <p>{el.name}</p>
                                            <span>{el.price}</span>
                                        </Link>
                                    </div>
                                })
                            }
                            {
                                olobo.map(el => {
                                    return <div className="national--group__olobo">
                                        <Link to={"/detail-page"}>
                                            <img src={el.imageUrl} alt="img"/>
                                            <p>{el.name}</p>
                                            <span>{el.price}</span>
                                        </Link>
                                    </div>
                                })
                            }
                            {
                                soup.map(el => {
                                    return <div className="national--group__soup">
                                        <Link to={"/detail-page"}>
                                            <img src={el.imageUrl} alt="img"/>
                                            <p>{el.name}</p>
                                            <span>{el.price}</span>
                                        </Link>
                                    </div>
                                })
                            }
                            {
                                lagman.map(el => {
                                    return <div className="national--group__lagman">
                                        <Link to={"/detail-page"}>
                                            <img src={el.imageUrl} alt="img"/>
                                            <p>{el.name}</p>
                                            <span>{el.price}</span>
                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
;

export default NationalFoods;