import React, {useState} from 'react';
import logo from '../../assets/img/foodLogo.png'
import {FaLock, FaTwitter, FaUserAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FcGoogle} from "react-icons/fc";
import {ImFacebook} from "react-icons/im";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import uniqid from 'uniqid';

const SignUp = () => {
    const navigate = useNavigate()

    const [name,setName] = useState('')
    const [gmail,setGmail] = useState('')
    const [password,setPassword] = useState('')

    const [notVal,setNotVal] = useState(false)

    const newAcc = {
        id: uniqid(),
        name: name,
        gmail: gmail,
        password: password,
        inAcc: true
    }

    const dispatch = useDispatch()
    const addAccount = (obj) => {
        dispatch({type: 'ADD_ACCOUNT' , payload: obj})
        navigate('/succReg')
    }

    return (
        <section id='signUp'>
            <div className="container">
                <div className="signUp">
                    <div className='signUp--logo'>
                        <img src={logo} alt=""/>
                        <h1>FOOD</h1>
                    </div>
                    <div className="signUp--form">
                        <h2>Full Name</h2>
                        <div style={{border: notVal && name === ''? '1px solid red': ''}} className="signUp--form__block">
                            <FaUserAlt className="signUp--form__block--icon"/>
                            <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter Your Full Name'/>
                        </div>

                        <h2>Email Or Phone Number</h2>
                        <div style={{border: notVal && gmail === ''? '1px solid red': ''}} className="signUp--form__block">
                            <MdEmail className="signUp--form__block--icon"/>
                            <input onChange={(e)=> setGmail(e.target.value)} type="email" placeholder='Your Email Or Phone Number'/>
                        </div>

                        <h2>Password</h2>
                        <div style={{border: notVal && password === ''? '1px solid red': ''}} className="signUp--form__block">
                            <FaLock className="signUp--form__block--icon"/>
                            <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Creat Password'/>
                        </div>
                    </div>
                    <button onClick={()=> name !== '' && gmail !== '' && password !== ''? addAccount(newAcc): setNotVal(true)}>Continue</button>
                    <div className='signUp--or'>
                        <div></div>
                        <h3>OR</h3>
                        <div></div>
                    </div>
                    <div className='signUp--links'>
                        <FcGoogle/>
                        <ImFacebook className='signUp--links__face'/>
                        <FaTwitter className='signUp--links__twit'/>
                    </div>
                    <h4 onClick={()=> navigate('/signIn')}>Already have An Account ?<span>Login</span></h4>
                </div>
            </div>
        </section>
    );
};

export default SignUp;