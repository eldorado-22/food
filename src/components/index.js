import React from 'react';
import {Route} from "react-router-dom";
import NationalFoods from "./NationalFoods/National-Foods";
import Hero from "./Hero/hero";
import MenuCategories from "./Menu-Categories/Menu-Categories";

const Index = () => {
    return (
        <div>
            <Hero/>
            <MenuCategories/>
            <NationalFoods/>
        </div>
    );
};

export default Index;