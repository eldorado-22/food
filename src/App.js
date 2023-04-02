import './App.scss';
import Header from "./components/Header/header";
import NationalFoods from "./components/NationalFoods/National-Foods";
import {Route, Routes} from "react-router-dom";
import Hero from "./components/Hero/hero";
import MenuCategories from "./components/Menu-Categories/Menu-Categories";
import DetailPage from "./pages/detail-page/DetailPage";
import Index from "./components";
import MyOrder from "./pages/My-Order/My-Order";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Index/>}/>
                <Route path={"/detail_page"} element={<DetailPage/>}/>
                <Route path={"/my-order"} element={<MyOrder/>}/>
            </Routes>
        </>
    );
}

export default App;
