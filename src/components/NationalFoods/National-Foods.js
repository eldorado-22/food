import React from 'react';
import './National-Foods.scss';
import {NavLink} from "react-router-dom";
import manty from "../../assets/img/image 46.png"

const NationalFoods = () => {
    return (
        <section id="national">
            <div className='container'>
                <div className='national'>
                    <h1 className='mx-1'>National Foods</h1>
                    <div className='national--img my-5'>
                        <NavLink to={"/detail_page"}>
                            <img src={manty} alt=""/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NationalFoods;