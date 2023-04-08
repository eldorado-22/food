import React from 'react';
import {Route} from "react-router-dom";
import NationalFoods from "./NationalFoods/National-Foods";
import Hero from "./Hero/hero";
import MenuCategories from "./Menu-Categories/Menu-Categories";
import Header from "./Header/header";
import SignPage from "../Signs/SignPage/signPage";
import {useSelector} from "react-redux";
import {mainReducer} from "../Store/Reducer";

const Index = () => {
    const {account} = useSelector(state => state)

    return (
        <div>
            {
                account.find(el => el.inAcc) ? <></> : <SignPage/>
            }
            <Header/>
            <Hero/>
            <MenuCategories/>
            <NationalFoods/>
        </div>
    );
};

export default Index;