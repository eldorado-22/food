import './App.scss';
import Header from "./components/Header/header";
import NationalFoods from "./components/NationalFoods/National-Foods";
import {Route, Routes} from "react-router-dom";
import Hero from "./components/Hero/hero";
import MenuCategories from "./components/Menu-Categories/Menu-Categories";

function App() {
    return (
        <>
            {/*<Header/>*/}
            <Hero/>
            <NationalFoods/>
            <MenuCategories/>
            <Routes>
                <Route/>
            </Routes>
        </>
    );
}

export default App;
