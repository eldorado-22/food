import React, {useState} from 'react';
import logo from "../../assets/img/foodLogo.png";
import {MdEmail} from "react-icons/md";
import {useNavigate, useParams} from "react-router-dom";

const ForgetCode = ({setCodeMassage}) => {
    const {code} = useParams()
    const [codeVal1,setCodeVal1] = useState('')
    const [codeVal2,setCodeVal2] = useState('')
    const [codeVal3,setCodeVal3] = useState('')
    const [codeVal4,setCodeVal4] = useState('')

    const navigate = useNavigate()

    const [incorrectCode,setIncorrectCode] = useState(false)
    function codeCheck(){
        if (code === codeVal1 + codeVal2 +codeVal3 + codeVal4){
            setCodeMassage(false)
            navigate('/newPassword')
        }else {
           setIncorrectCode(true)
        }
    }

    return (
        <section id='forgetCode'>
            <div className="container">
                <div className="forgetCode">
                    <div className='forgetCode--logo'>
                        <img src={logo} alt=""/>
                        <h1>FOOD</h1>
                    </div>
                    <div className="forgetCode--form">
                        <h2>Verify Code</h2>
                        {
                            incorrectCode? <p>incorrect code</p> : ''
                        }
                        <div className="forgetCode--form__block">
                            <input onChange={(e)=> {setCodeVal1(e.target.value); setIncorrectCode(false)}} maxLength='1' type="text"/>
                            <input onChange={(e)=> {setCodeVal2(e.target.value); setIncorrectCode(false)}} maxLength='1' type="text"/>
                            <input onChange={(e)=> {setCodeVal3(e.target.value); setIncorrectCode(false)}} maxLength='1' type="text"/>
                            <input onChange={(e)=> {setCodeVal4(e.target.value); setIncorrectCode(false)}} maxLength='1' type="text"/>
                        </div>
                    </div>
                    <button onClick={()=> codeCheck()}>Continue</button>
                </div>
            </div>
        </section>
    );
};

export default ForgetCode;