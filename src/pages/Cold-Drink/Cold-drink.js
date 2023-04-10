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
                                <div onClick={() => {
                                getBasket(el)
                                navigate(`/cold-drink/${el.id}`)}
                                }>
                                    <img src={el.imageUrl} alt="img"/>
                                    <p>{el.name}</p>
                                    <span>{el.price}</span>
                                </div>
                            </div>
                        })}

                    {/*{cola.map(el => {*/}
                    {/*        return <div className="coldDrink--cola">*/}
                    {/*            <NavLink to={"/cold-drink"}>*/}
                    {/*                <img src={el.imageUrl} alt="img"/>*/}
                    {/*                <p>{el.name}</p>*/}
                    {/*                <span>{el.price}</span>*/}
                    {/*            </NavLink>*/}
                    {/*        </div>*/}
                    {/*    })}*/}

                    {/*{fanta.map(el => {*/}
                    {/*        return <div className="coldDrink--fanta">*/}
                    {/*            <NavLink to={"/cold-drink"}>*/}
                    {/*                <img src={el.imageUrl} alt="img"/>*/}
                    {/*                <p>{el.name}</p>*/}
                    {/*                <span>{el.price}</span>*/}
                    {/*            </NavLink>*/}
                    {/*        </div>*/}
                    {/*    })}*/}
                    {/*{sprite.map(el => {*/}
                    {/*        return <div className="coldDrink--sprite">*/}
                    {/*            <NavLink to={"/cold-drink"}>*/}
                    {/*                <img src={el.imageUrl} alt="img"/>*/}
                    {/*                <p>{el.name}</p>*/}
                    {/*                <span>{el.price}</span>*/}
                    {/*            </NavLink>*/}
                    {/*        </div>*/}
                    {/*    })}*/}
                    {/*{sevenUp.map(el => {*/}
                    {/*        return <div className="coldDrink--sevenUp">*/}
                    {/*            <NavLink to={"/cold-drink"}>*/}
                    {/*                <img src={el.imageUrl} alt="img"/>*/}
                    {/*                <p>{el.name}</p>*/}
                    {/*                <span>{el.price}</span>*/}
                    {/*            </NavLink>*/}
                    {/*        </div>*/}
                    {/*    })}*/}
                    {/*{schweppes.map(el => {*/}
                    {/*        return <div className="coldDrink--schweppes">*/}
                    {/*            <NavLink to={"/cold-drink"}>*/}
                    {/*                <img src={el.imageUrl} alt="img"/>*/}
                    {/*                <p>{el.name}</p>*/}
                    {/*                <span>{el.price}</span>*/}
                    {/*            </NavLink>*/}
                    {/*        </div>*/}
                    {/*    })}*/}

                </div>
            </div>
        </section>
    );
};

export default ColdDrink;