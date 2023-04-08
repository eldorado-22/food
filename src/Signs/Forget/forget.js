import React, {useState} from 'react';
import logo from "../../assets/img/foodLogo.png";
import {MdEmail} from "react-icons/md";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";


const Forget = ({setCodeMassage, setCodeVal, setForgetGmail}) => {
    const navigate = useNavigate()
    const {forgetGmail} = useParams()

    const [gmail,setGmail] = useState(forgetGmail)

    const {account} = useSelector(state => state)

    const [inCorrectGmail,setInCorrectGmail] = useState(false)
    function logIn(){
             if (!account.find(el => el.gmail === gmail)){
                setInCorrectGmail(true)
            }else {
                 let n = ''
                 for (let i = 1; i <= 4; i++){
                     n = n + `${Math.floor(Math.random() * 10)}`
                 }
                 navigate(`/forgetCode/${n}`)
                 setCodeMassage(true)
                 setCodeVal(n)
                 setForgetGmail(gmail)
             }
    }
    return (
        <section id='forget'>
            <div className="container">
                <div className="forget">
                    <div className='forget--logo'>
                        <img src={logo} alt=""/>
                        <h1>FOOD</h1>
                    </div>
                    <div className="forget--form">
                        <h2>Forget Password</h2>
                        <p>Type your Email, we will send your verification code
                            via Email</p>
                        {inCorrectGmail? <p style={{marginTop: '30px'}}>that account doesn't exist. <span style={{color: 'red'}} onClick={()=> navigate('/signUp')}>sign up?</span> </p>: ''}
                        <div className="forget--form__block">
                            <MdEmail className="forget--form__block--icon"/>
                            <input defaultValue={forgetGmail} onChange={(e)=> {setGmail(e.target.value); setInCorrectGmail(false)}} type="email" placeholder='Your Email Or Phone Number'/>
                        </div>
                    </div>
                    <button onClick={()=> logIn()}>Continue</button>
                </div>
            </div>
        </section>
    );
};

export default Forget;