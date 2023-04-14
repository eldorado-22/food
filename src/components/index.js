import React from 'react';
import NationalFoods from "./NationalFoods/National-Foods";
import Hero from "./Hero/hero";
import MenuCategories from "./Menu-Categories/Menu-Categories";
import Header from "./Header/header";
import SignPage from "../Signs/SignPage/signPage";
import {useSelector} from "react-redux";
import {mainReducer} from "../Store/Reducer";
import Desserts from "../pages/Desserts/Desserts";
import Pizza from "../pages/Pizza/Pizza";
import ColdDrink from "../pages/Cold-Drink/Cold-drink";
import HotDrink from "../pages/Hot-drink/Hot-drink";
import EasternCuisine from "../pages/Eastern-Cuisine/Eastern-Cuisine";

const Index = () => {
    const {account} = useSelector(state => state)

    return (
        <div>
            {account.find(el => el.inAcc) ? <></> : <SignPage/>}
            <Header/>
            <Hero/>
            <MenuCategories/>
            <NationalFoods/>
            <Desserts/>
            <Pizza/>
            <ColdDrink/>
            <HotDrink/>
            <EasternCuisine/>
        </div>
    );
};

export default Index;