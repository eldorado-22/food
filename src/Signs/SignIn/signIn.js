import React, {useState} from 'react';
import logo from "../../assets/img/foodLogo.png";
import {FaLock, FaTwitter, FaUserAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FcGoogle} from "react-icons/fc";
import {ImFacebook} from "react-icons/im";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate()

    const {account} = useSelector(state => state)
    const dispatch = useDispatch()
    const [gmail,setGmail] = useState('')
    const [password,setPassword] = useState('')

    const [notVal,setNotVal] = useState(false)

    const [inCorrectPassword,setInCorrectPassword] = useState(false)
    const [inCorrectGmail,setInCorrectGmail] = useState(false)
    function logIn(){
            let id = 0
            account.map(el => {if (el.gmail === gmail && el.password === password){id = el.id}})
            if (account.find(el => el.gmail === gmail && el.password === password)){
                dispatch({type: 'LOG_IN' , payload: id})
                navigate('/succReg')
            }else if (account.find(el => el.gmail === gmail && el.password !== password)){
                setInCorrectPassword(true)
            }else {
                setInCorrectGmail(true)
            }
    }

    return (
        <section id='signIn'>
            <div className="container">
                <div className="signIn">
                    <div className='signIn--logo'>
                        <img src={logo} alt=""/>
                        <h1>FOOD</h1>
                    </div>
                    <div className="signIn--form">
                        <h2>Email Or Phone Number <br/>{inCorrectGmail? <p>that account doesn't exist. <span onClick={()=> navigate('/signUp')}>sign up?</span> </p>: ''}</h2>
                        <div style={{border: (notVal && gmail === '') || inCorrectGmail? '1px solid red' : ''}} className="signIn--form__block">
                            <MdEmail className="signIn--form__block--icon"/>
                            <input onChange={(e)=> {setGmail(e.target.value); setInCorrectGmail(false); setInCorrectPassword(false)}} type="email" placeholder='Your Email Or Phone Number'/>
                        </div>

                        <h2>Password <br/>{inCorrectPassword? <p>incorrect password. <span onClick={()=> navigate(`/forget/${gmail}`)}>forget?</span> </p>: ''}</h2>
                        <div style={{border: notVal && password === '' || inCorrectPassword? '1px solid red' : ''}} className="signIn--form__block">
                            <FaLock className="signIn--form__block--icon"/>
                            <input onChange={(e)=> {setPassword(e.target.value); setInCorrectPassword(false)}} type="password" placeholder='Creat Password'/>
                        </div>
                    </div>
                    <button onClick={()=> gmail !== '' && password !== ''? logIn(): setNotVal(true)}>Continue</button>
                    <div className='signIn--or'>
                        <div></div>
                        <h3>OR</h3>
                        <div></div>
                    </div>
                    <div className='signIn--links'>
                        <FcGoogle/>
                        <ImFacebook className='signIn--links__face'/>
                        <FaTwitter className='signIn--links__twit'/>
                    </div>
                    <h4>Already have An Account ?<span>Login</span></h4>
                </div>
            </div>
        </section>
    );
};

export default SignIn;