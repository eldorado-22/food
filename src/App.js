import './App.scss';
import {Route, Routes} from "react-router-dom";
import MyOrder from "./pages/My-Order/My-Order";
import Message from "./pages/Message/message";
import Settings from "./pages/Settings/settings";
import DetailPage from "./pages/detail-page/DetailPage";
import Index from "./components";
import DetailCard from "./pages/My-Order/Detail-Card/detail-card";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/my-order"} element={<MyOrder/>}/>
                <Route path={"/message"} element={<Message/>}/>
                <Route path={"/settings"} element={<Settings/>}/>
                <Route path={"/"} element={<Index/>}/>
                <Route path={"/detail-page"} element={<DetailPage/>}/>
                <Route path={"/my-order"} element={<MyOrder/>}/>
                <Route path={"/address"} element={<DetailPage/>}/>
                <Route path={"/detail-card"} element={<DetailCard/>}/>
            </Routes>
        </>
    );
}

export default App;
