import React from 'react';
import './National-Foods.scss';
import {Link, useNavigate} from "react-router-dom";
import {data} from "../FakeBackend/FakeBackend";
import {useDispatch} from "react-redux";

const NationalFoods = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getBasket = (el) => {
        dispatch({type: "DATA_DETAIL", payload: el})
    }

        return (
            <section id="national">
                <div className='container'>
                    <div className='national'>
                        <h1 className='mx-1'>National Foods</h1>
                        <div className='national--group'>
                            {
                                data[0].map(el => {
                                    return <div className="national--group__fiveB">
                                        <div  onClick={() => {getBasket(el)
                                            navigate(`/detail-page/${el.id}`)}}>
                                            <img src={el.imageUrl} alt="img"/>
                                            <p>{el.name}</p>
                                            <span>{el.price}</span>
                                        </div>
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