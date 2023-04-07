import React from 'react';
import NationalFoods from "./NationalFoods/National-Foods";
import Hero from "./Hero/hero";
import MenuCategories from "./Menu-Categories/Menu-Categories";
import Header from "./Header/header";
import Desserts from "../pages/Desserts/Desserts";
import Pizza from "../pages/Pizza/Pizza";
import ColdDrink from "../pages/Cold-Drink/Cold-drink";
import HotDrink from "../pages/Hot-drink/Hot-drink";

const Index = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <MenuCategories/>
            <NationalFoods/>
            <Desserts/>
            <Pizza/>
            <ColdDrink/>
            <HotDrink/>
        </div>
    );
};

export default Index;