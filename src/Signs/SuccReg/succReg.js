import React from 'react';
import {IoMdCheckmark} from "react-icons/io";
import {useNavigate} from "react-router-dom";

const SuccReg = () => {
    const navigate = useNavigate()
    return (
        <section id='succReg'>
            <div className="container">
                <div className="succReg">
                    <div className='succReg--mark'>
                        <IoMdCheckmark/>
                    </div>

                    <div className='succReg--info'>
                        <h1>Successfully Registered</h1>
                        <p>Congretulation your account is registered in this appication</p>
                    </div>

                    <button onClick={()=> navigate('/')}>Continue</button>
                </div>
            </div>
        </section>
    );
};

export default SuccReg;