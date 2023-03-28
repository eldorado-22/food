import './App.scss';
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Hero from "./components/Hero/hero";
import MenuCategories from "./components/Menu-Categories/Menu-Categories";

function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <MenuCategories/>
            <Routes>
                <Route/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
