import React, {useState} from 'react';
import sahar from "../../assets/img/image 46.png"
import {TbCash} from "react-icons/tb";
import {BsCreditCardFill, BsTerminalFill} from "react-icons/bs";
import './My-Order.scss';
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";

const MyOrder = () => {

    const [counter, setCounter] = useState(1)
    const getMoney = () => {
        if (counter > 1) {
            return setCounter(counter - 1)
        } else {
            return false
        }
    }

    return (
        <section id='orders'>
            <div className='container'>
                <div className='orders'>
                   <div className="orders--B">
                       <BurgerMenuTwo/>
                       <h1 className='flex justify-center text-xl'>Cart</h1>
                   </div>
                    <h1 className='my-4'>My order</h1>
                    <div className='orders--block flex justify-between h-[68px] border-solid:ring-fuchsia-500'>
                        <div className='orders--block__image flex items-center'>
                            <img className='w-[57px] mx-3' src={sahar} alt=""/>
                            <h1>manty</h1>
                        </div>
                        <div className='orders--block__state flex items-center mx-4'>
                            <span className='cursor-pointer' onClick={getMoney}>-</span>
                            <h1 className='mx-4'>{counter}x</h1>
                            <button onClick={() => setCounter(counter + 1)}>+</button>
                        </div>
                    </div>
                </div>

                <div className='pay'>
                    <h1>Paymant Methods</h1>
                    <div className='pay--block'>
                        <div className='pay--block__cash'>
                            <div className='pay--block__cash--icon'>
                                <TbCash/>
                            </div>
                            <h1>Cash pay</h1>
                        </div>

                        <div className='pay--block__cashTwo'>
                            <div className='pay--block__cashTwo--icon'>
                                <BsCreditCardFill/>
                            </div>
                            <h1>Card</h1>
                        </div>
                        <div className='pay--block__cashThree'>
                            <div className='pay--block__cashThree--icon'>
                                <BsTerminalFill/>
                            </div>
                            <h1>Terminal</h1>
                        </div>
                    </div>
                </div>

                <div className='btn'>
                    <button>Play Now</button>
                </div>
            </div>
        </section>
    );
};

export default MyOrder;