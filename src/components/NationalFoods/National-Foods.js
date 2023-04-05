import React from 'react';
import './National-Foods.scss';
import {NavLink} from "react-router-dom";
import fiveB from "../../assets/img/besh-barmak.png"

const NationalFoods = () => {
    return (
        <section id="national">
            <div className='container'>
                <div className='national'>
                    <h1 className='mx-1'>National Foods</h1>
                    <div className='national--img my-5'>
                        <NavLink to={"/detail-page"}>
                            <img src={fiveB} alt=""/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NationalFoods;