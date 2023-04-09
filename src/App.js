import './App.scss';
import {Route, Routes, useParams} from "react-router-dom";
import MyOrder from "./pages/My-Order/My-Order";
import Message from "./pages/Message/message";
import Settings from "./pages/Settings/settings";
import DetailPage from "./pages/detail-page/DetailPage";
import Index from "./components";
import SignPage from "./Signs/SignPage/signPage";
import SignUp from "./Signs/SignUp/signUp";
import SignIn from "./Signs/SignIn/signIn";
import Forget from "./Signs/Forget/forget";
import ForgetCode from "./Signs/ForgetCode/forgetCode";
import {IoMdClose} from "react-icons/io";
import {useState} from "react";
import NewPassword from "./Signs/NewPassword/newPassword";
import SuccReg from "./Signs/SuccReg/succReg";

import DetailCard from "./pages/My-Order/Detail-Card/detail-card";
import DetailPizza from "./pages/Pizza/Detail-Pizza/Detail-Pizza";
import DetailDesert from "./pages/Desserts/Detail-desert";
import DetailCold from "./pages/Cold-Drink/Detail-Cold/Detail-Cold";
import Print from "./pages/My-Order/print-page/Print";
function App() {
    const [codeMassage,setCodeMassage] = useState(false)
    const [codeVal,setCodeVal] = useState('')
    const [forgetGmail,setForgetGmail] = useState('')

    return (
        <>
            <div style={{top: codeMassage? '' : '-200px'}} className='codeMessage'>
                <div className='codeMessage--block'>
                    <IoMdClose onClick={()=> setCodeMassage(false)} className='codeMessage--block__icon'/>
                    <p>{codeVal}</p>
                </div>
            </div>
            <Routes>
                <Route path={"/order"} element={<MyOrder/>}/>
                <Route path={"/message"} element={<Message/>}/>
                <Route path={"/settings"} element={<Settings/>}/>
                <Route path={"/"} element={<Index/>}/>
                <Route path={"/detail-page"} element={<DetailPage/>}/>
                <Route path={"/my-order"} element={<MyOrder/>}/>
                <Route path={"/signUp"} element={<SignUp/>}/>
                <Route path={"/signIn"} element={<SignIn/>}/>
                <Route path={"/forget/:forgetGmail"} element={<Forget setForgetGmail={setForgetGmail} setCodeVal={setCodeVal} setCodeMassage={setCodeMassage}/>}/>
                <Route path={"/forgetCode/:code"} element={<ForgetCode setCodeMassage={setCodeMassage}/>}/>
                <Route path={"/newPassword"} element={<NewPassword forgetGmail={forgetGmail}/>}/>
                <Route path={"/succReg"} element={<SuccReg/>}/>
                <Route path={"/address"} element={<DetailPage/>}/>
                <Route path={"/detail-card"} element={<DetailCard/>}/>
                <Route path={"/detail-desert"} element={<DetailDesert/>}/>
                <Route path={"/detail-pizza"} element={<DetailPizza/>}/>
                <Route path={"/cold-drink"} element={<DetailCold/>}/>
                <Route path={"/print-order"} element={<Print/>}/>
            </Routes>
        </>
    );
}

export default App;
