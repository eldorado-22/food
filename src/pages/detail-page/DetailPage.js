import React, {useState} from 'react';
import './DetailPage.scss'
import {NavLink} from "react-router-dom";
import manty1 from "../../assets/img/image 46.png"
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";
import manty1 from "../../assets/img/Group 26.png"
// import manty1 from "../../assets/img/Group 26.png"
import DetailBtn from "./DetailBtn";


const DetailPage = () => {
    return (
        <section id='detail'>
            <div className='container'>
                <BurgerMenuTwo/>
                <div className='detail'>
                    <div className='detail--img'>
                        <img className='mx-[30%]' src={manty1} alt=""/>
                        <h2>manty</h2>
                        <h4>200|250</h4>
                    </div>
                    <div className='detail--block'>
                        <div className='detail--block__image'>
                            <img src={manty1} alt=""/>
                            <h1>manti</h1>
                        </div>
                        <DetailBtn/>
                    </div>
                    <NavLink to={"/my-order"}>
                        <button  className='detail--btn my-6'>ADD TO CART</button >
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default DetailPage;