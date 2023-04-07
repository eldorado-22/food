import React from 'react';
import NationalFoods from "./NationalFoods/National-Foods";
import Hero from "./Hero/hero";
import MenuCategories from "./Menu-Categories/Menu-Categories";
import Header from "./Header/header";
import Desserts from "../pages/Desserts/Desserts";
import Pizza from "../pages/Pizza/Pizza";

const Index = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <MenuCategories/>
            <NationalFoods/>
            <Desserts/>
            <Pizza/>
        </div>
    );
};

export default Index;