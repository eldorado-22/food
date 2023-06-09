import React, {useState} from 'react';
import {TbCash} from "react-icons/tb";
import {BsCreditCardFill, BsTerminalFill} from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";
import {useSelector} from "react-redux";
const MyOrder = () => {
    const navigate = useNavigate()
    const [terminal,setTerminal] = useState(false)
    const [cash,setCash] = useState(false)
    const {order,basket} = useSelector(s => s)
    const [counter, setCounter] = useState(false)



    return (
        <section id='orders'>
            <div className='container'>
                <div className='orders'>
                    <div className="orders--B" style={{display: "flex"}}>
                        <BurgerMenuTwo/>
                        <h1 className='flex justify-center text-xl' style={{textAlign: "center"}}>Cart</h1>
                    </div>

                    <h2 className='my-4'>My order</h2>
                    {order.length === 0 && <button onClick={() => navigate('/')} type="button"className="orders--add text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-[60px]">+ Add order</button>}
                </div>

                <div className='orders--block'>
                    {
                        order.map(el => (
                            <div key={el.id} className='orders--block__zakaz flex justify-between items-center'>
                                    <img className='px-2' width={100} src={el.imageUrl} alt=""/>
                                    <h1>{el.name}</h1>
                                    <h1>{el.price}som</h1>
                                    <h2>{el.quantity}</h2>
                            </div>
                        ))
                    }
                </div>

                <div style={{display: order.length !== 0 ? "block" : "none"}} className='pay'>
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
                <div style={{display: order.length !== 0 ? "block" : "none"}} className='btn'>
                    <Link to={"/print-order"}>
                        <button>Pay Now</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MyOrder;