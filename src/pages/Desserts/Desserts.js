import React from 'react';
import './desserts.scss';
import {NavLink, useNavigate} from "react-router-dom";
import {data} from "../../components/FakeBackend/FakeBackend";
import {useDispatch} from "react-redux";

const Desserts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getDesert = (el) => {
        dispatch({type: "DATA_DETAIL", payload: el})
    }
        return (
            <section id="desserts">
                <div className="container">
                    <h1 className="mx-1">Desserts</h1>
                    <div className="desserts">
                        {
                            data[1].map(el => {
                                return <div className="desserts--straw">
                                    <div onClick={() => {
                                        getDesert(el)
                                        navigate(`/detail-desert/${el.id}`)
                                    }
                                    }>
                                        <img src={el.imageUrl} alt="img"/>
                                        <p>{el.name}</p>
                                        <span>{el.price}</span>
                                    </div>
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