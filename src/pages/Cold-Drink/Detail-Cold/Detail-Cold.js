import React from 'react';
import BurgerMenuTwo from "../../../components/Burger-Menu-Two/Burger-Menu-Two";
import {pepsi} from "../../../components/FakeBackend/FakeBackend";
import {NavLink} from "react-router-dom";

const DetailCold = () => {
    return (
        <section id='detail'>
            <div className='container'>
                <BurgerMenuTwo/>
                <div className='detail'>
                    {
                        pepsi.map(el => (
                            <div className='detail--img'>
                                <img className='mx-[30%]' src={el.imageUrl} alt="img"/>
                                <p>{el.name}</p>
                                <span>{el.price}</span>
                            </div>
                        ))
                    }

                    <NavLink to={"/my-order"}>
                        <button className='detail--btn my-6'>ADD TO CART</button>
                    </NavLink>

                </div>
            </div>
        </section>
    );
};

export default DetailCold;