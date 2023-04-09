import React, {useState} from 'react';
import logo from "../../assets/img/foodLogo.png";
import {FaLock, FaTwitter, FaUserAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FcGoogle} from "react-icons/fc";
import {ImFacebook} from "react-icons/im";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const NewPassword = ({forgetGmail}) => {
    const [password,setPassword] = useState('')
    const [password1,setPassword1] = useState('')

    const [notVal,setNotVal] = useState(false)

    const [incorrectPassword, setIncorrectPassword] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    function newPassword(){
        if (password !== password1){
            setIncorrectPassword(true)
        }else {
            dispatch({type: 'NEW_PASSWORD' , payload: {g: forgetGmail , p: password}})
            navigate('/succReg')
        }
    }

    return (
        <section id='newPassword'>
            <div className="container">
                <div className="newPassword">
                    <div className='newPassword--logo'>
                        <img src={logo} alt=""/>
                        <h1>FOOD</h1>
                    </div>
                    <div className="newPassword--form">
                        <h2>New Password</h2>
                        <p>Creat Your New Password</p>
                        <div style={{border: notVal && password === '' ? '1px solid red': ''}} className="newPassword--form__block">
                            <FaLock className="newPassword--form__block--icon"/>
                            <input onChange={(e)=> {setPassword(e.target.value); setIncorrectPassword(false)}} type="password" placeholder='Enter Your New Password'/>
                        </div>
                        {
                            incorrectPassword? <span>Confirm Your New Password</span>: ''
                        }
                        <div style={{border: notVal && password1 === '' || incorrectPassword ? '1px solid red': ''}} className="newPassword--form__block">
                            <FaLock className="newPassword--form__block--icon"/>
                            <input onChange={(e)=> {setPassword1(e.target.value); setIncorrectPassword(false)}} type="password" placeholder='Confirm Your New Password'/>
                        </div>
                    </div>
                    <button onClick={()=> password !== '' || password1 !== '' ? newPassword() : setNotVal(true)}>Continue</button>
                </div>
            </div>
        </section>
    );
};

export default NewPassword;