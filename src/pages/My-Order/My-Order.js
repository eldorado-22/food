import React, {useState} from 'react';
import {TbCash} from "react-icons/tb";
import {BsCreditCardFill, BsTerminalFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";
import {useSelector} from "react-redux";
import DetailPage from "../detail-page/DetailPage";
const MyOrder = () => {
    const [terminal,setTerminal] = useState(false)
    const [cash,setCash] = useState(false)
    const {order} = useSelector(s => s)
    return (
        <section id='orders'>
            <div className='container'>
                <div className='orders'>

                    <div className="orders--B" style={{display: "flex"}}>
                        <BurgerMenuTwo/>
                        <h1 className='flex justify-center text-xl' style={{textAlign: "center"}}>Cart</h1>
                    </div>

                    <h2 className='my-4'>My order</h2>

                </div>
                {
                    <h1>{order.name}</h1>
                }
                <div className='pay'>
                    <h1>Payment Methods</h1>
                    <div className='pay--block'>
                        <div className='pay--block__cash'>
                            <div className= 'pay--block__cash--icon'>
                                <TbCash onClick={() => setCash(!cash)} style={{color: terminal === cash ? '#F86D3B' :  ''}}/>
                            </div>
                            <h1>Cash pay</h1>
                        </div>
                        <div className='pay--block__cash'>
                            <div className= 'pay--block__cash--icon'>
                                <Link to={"/detail-card"}>
                                    <BsCreditCardFill/>
                                </Link>
                            </div>
                            <h1>card</h1>
                        </div>
                        <div className='pay--block__cash'>
                            <div className= 'pay--block__cash--icon'>
                                <BsTerminalFill onClick={() => setTerminal(!terminal)} style={{color: terminal !== cash ? '#F86D3B' : ''}}/>
                            </div>
                            <h1>Terminal</h1>
                        </div>
                    </div>
                </div>
                <div className='btn'>
                    <Link to={"/print-order"}>
                        <button>Play Now</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MyOrder;