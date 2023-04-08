import React from 'react';
import {useNavigate} from "react-router-dom";

const SignPage = () => {
    const navigate = useNavigate()

    return (
        <div id='signsPage'>
            <button onClick={()=> navigate('/signIn')}>sign in</button>
            <button onClick={()=> navigate("/signUp")}>sign up</button>
        </div>
    );
};

export default SignPage;