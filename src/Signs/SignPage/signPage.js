import React from 'react';
import {useNavigate} from "react-router-dom";
import logo from './../../assets/img/foodLogo.png'
import burger from './../../assets/img/burger.png'


const SignPage = () => {
    const navigate = useNavigate()

    return (
        <div id='signsPage'>
            <div className="container">
                <div className="signPage">
                    <img src={logo} alt="img" className="signPage--logo"/>
                    <h1>Welcome To <span>Food</span></h1>
                    <h4>Enjoy with meal</h4>
                   <div className="signPage--btn">
                       <button onClick={()=> navigate('/signIn')}>sign in</button>
                       <button onClick={()=> navigate("/signUp")}>sign up</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SignPage;