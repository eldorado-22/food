import React from 'react';
import {Route} from "react-router-dom";
import NationalFoods from "./NationalFoods/National-Foods";
import Hero from "./Hero/hero";
import MenuCategories from "./Menu-Categories/Menu-Categories";
import Header from "./Header/header";

const Index = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <MenuCategories/>
            <NationalFoods/>
        </div>
    );
};

export default Index;