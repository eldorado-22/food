import React, {useState} from 'react';
import sahar from "../../assets/img/image 46.png"
import {TbCash} from "react-icons/tb";
import {BsCreditCardFill, BsTerminalFill} from "react-icons/bs";
import DetailBtn from "../detail-page/DetailBtn";
const MyOrder = () => {
    return (
        <section id='orders'>
            <div className='container'>
                <h1 className='flex justify-center text-xl'>cart</h1>
                <div className='orders'>
                    <h1 className='my-4'>my order</h1>
                    <div className='orders--block flex justify-between items-center h-[68px] border-solid:ring-fuchsia-500'>
                            <div className='orders--block__image flex items-center'>
                                <img className='w-[57px] mx-3' src={sahar} alt=""/>
                                <h1>manti</h1>
                            </div>
                          <DetailBtn/>
                    </div>
                </div>
                <div className='pay'>
                    <h1>Paymant Methods</h1>
                    <div className='pay--block'>
                        <div className='pay--block__cash'>
                            <div className= 'pay--block__cash--icon'>
                                <TbCash/>
                            </div>
                            <h1>Cash pay</h1>
                        </div>
                        <div className='pay--block__cash'>
                            <div className= 'pay--block__cash--icon'>
                                <BsCreditCardFill/>
                            </div>
                            <h1>card</h1>
                        </div>
                        <div className='pay--block__cash'>
                            <div className= 'pay--block__cash--icon'>
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