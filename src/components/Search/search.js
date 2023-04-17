import React, {useEffect, useState} from 'react';
import {data} from "../FakeBackend/FakeBackend";
import {useSelector} from "react-redux";
import NationalFoods from "../NationalFoods/National-Foods";
import BurgerMenu from "../Burger-Menu/burger-menu";
import BurgerMenuTwo from "../Burger-Menu-Two/Burger-Menu-Two";

const Search = () => {
    const {input} = useSelector(state => state)
    const res = data.filter(el => el.categories === input)
    return (
        <div id='search'>
            <div className='container'>
                <BurgerMenuTwo/>
                {
                    res.map(el => (
                        <div>
                            <img src={el.imageUrl} alt=""/>
                            <h1>{el.price}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Search;