import React, {useState} from 'react';
import './detail-card.scss';
import BurgerMenuTwo from "../../../components/Burger-Menu-Two/Burger-Menu-Two";
import {Link, useNavigate} from "react-router-dom";

const DetailCard = () => {
    const [state,setState] = useState(false)
    const [value, setValue] = useState({
        title: "",
        number: "",
        date: "",
        cvv: "",
        address: ""
    })
    const navigate = useNavigate()

    const handleClick = () => {
        if (value.title.trim().length !== 0 && value.date.trim().length !== 0 && value.cvv.trim().length !== 0 && value.address.trim().length !== 0 && value.number.trim().length !== 0) {
            setState(false)
            navigate("/print-order")
            setValue({title: "", number: "", date: "", cvv: "", address: ""})
        } else {
            setState(true)
        }
    }

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    return (
        <div id='card'>
            <div className='container'>
                <div className="card--B" style={{display: "flex",}}>
                    <BurgerMenuTwo/>
                </div>
                <h1>Add Debit Card</h1>
                <div className='card'>
                    <div className='card--name'>
                        <h2>Name Or Debit Card</h2>
                        <input value={value.title} style={{border: state ? "2px solid red" : ""}} type="text" name={"title"} onChange={handleChange}/>
                        <h2>Card Number</h2>
                        <input value={value.number} style={{border: state ? "2px solid red" : ""}} type="number" name={"number"} onChange={handleChange}/>
                    </div>
                    <div className='card--number'>
                        <div className='card--number__date'>
                            <h2>Exp Date</h2>
                            <input value={value.date} style={{border: state ? "2px solid red" : ""}} type="number" name={"date"} onChange={handleChange}/>
                        </div>
                        <div className='card--number__cvv'>
                            <h2>CVV</h2>
                            <input value={value.cvv} style={{border: state ? "2px solid red" : ""}} type="number" name={"cvv"} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='card--delivery'>
                        <h1>Dilivery Address</h1>
                        <input value={value.address} style={{border: state ? "2px solid red" : ""}} type="text" name={"address"} onChange={handleChange}/>
                    </div>
                    <div className='card--btn'>
                        <button onClick={handleClick}>Play Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;