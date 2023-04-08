import React from 'react';
import './Hot-drink.scss';
import {
    americano, cappuccino, latte, mocha, tea, teaMilk
} from "../../components/FakeBackend/FakeBackend";
import {NavLink} from "react-router-dom";

const HotDrink = () => {
    return (<section id="hotDrink">
        <div className="container">
            <h1 className="mx-1">Hot Drink</h1>
            <div className="hotDrink">
                {tea.map(el => {
                    return <div className="hotDrink--tea">
                        <NavLink to={"/detail-desert"}>
                            <img src={el.imageUrl} alt="img"/>
                            <p>{el.name}</p>
                            <span>{el.price}</span>
                        </NavLink>
                    </div>
                })}
                {teaMilk.map(el => {
                    return <div className="hotDrink--milk">
                        <NavLink to={"/detail-desert"}>

                            <img src={el.imageUrl} alt="img"/>
                            <p>{el.name}</p>
                            <span>{el.price}</span>
                        </NavLink>
                    </div>
                })}
                {cappuccino.map(el => {
                    return <div className="hotDrink--cappuccino">
                        <NavLink to={"/detail-desert"}>
                            <img src={el.imageUrl} alt="img"/>
                            <p>{el.name}</p>
                            <span>{el.price}</span>
                        </NavLink>
                    </div>
                })}
                {americano.map(el => {
                    return <div className="hotDrink--americano">
                        <NavLink to={"/detail-desert"}>
                            <img src={el.imageUrl} alt="img"/>
                            <p>{el.name}</p>
                            <span>{el.price}</span>
                        </NavLink>
                    </div>
                })}
                {
                    mocha.map(el => {
                        return <div className="hotDrink--mocco">
                            <NavLink to={"/detail-desert"}>
                                <img src={el.imageUrl} alt="img"/>
                                <p>{el.name}</p>
                                <span>{el.price}</span>
                            </NavLink>
                        </div>
                    })
                }
                {
                    latte.map(el => {
                        return <div className="hotDrink--latte">
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
    </section>);
};

export default HotDrink;