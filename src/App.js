import './App.scss';
import {Route, Routes} from "react-router-dom";
import MyOrder from "./pages/My-Order/My-Order";
import Message from "./pages/Message/message";
import Settings from "./pages/Settings/settings";
import DetailPage from "./pages/detail-page/DetailPage";
import Index from "./components";

function App() {
    return (
        <>
            {/*<Header/>*/}
            <Routes>
                <Route path={"/my-order"} element={<MyOrder/>}/>
                <Route path={"/message"} element={<Message/>}/>
                <Route path={"/settings"} element={<Settings/>}/>
                <Route path={"/"} element={<Index/>}/>
                <Route path={"/detail-page"} element={<DetailPage/>}/>
                <Route path={"/address"} element={<DetailPage/>}/>
            </Routes>
        </>
    );
}

export default App;
