import './App.scss';
import Header from "./components/Header/header";
import NationalFoods from "./components/NationalFoods/National-Foods";
import {Route, Routes} from "react-router-dom";
import Hero from "./components/Hero/hero";
import MenuCategories from "./components/Menu-Categories/Menu-Categories";
import MyOrder from "./pages/My-Order/My-Order";
import Message from "./pages/Message/message";
import Settings from "./pages/Settings/settings";

function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <NationalFoods/>
            <MenuCategories/>
            <Routes>
                <Route path={"/order"} element={<MyOrder/>}/>
                <Route path={"/message"} element={<Message/>}/>
                <Route path={"/settings"} element={<Settings/>}/>
            </Routes>
        </>
    );
}

export default App;
