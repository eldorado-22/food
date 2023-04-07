import React, {useState} from 'react';
import sahar from "../../assets/img/image 46.png"
import {TbCash} from "react-icons/tb";
import {BsCreditCardFill, BsTerminalFill} from "react-icons/bs";
import DetailBtn from "../detail-page/DetailBtn";
import {Link} from "react-router-dom";
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";
import {beshbarmak} from "../../components/FakeBackend/FakeBackend";
const MyOrder = () => {
    const [terminal,setTerminal] = useState(false)
    const [cash,setCash] = useState(false)
    return (
        <section id='orders'>
            <div className='container'>
                <div className='orders'>

                    <div className="orders--B" style={{display: "flex"}}>
                        <BurgerMenuTwo/>
                        <h1 className='flex justify-center text-xl' style={{textAlign: "center"}}>Cart</h1>
                    </div>

                    <h2 className='my-4'>My order</h2>

                    {
                        beshbarmak.map(el => (
                            <div className='orders--block flex justify-between items-center h-[68px] border-solid:ring-fuchsia-500'>
                                <div className='orders--block__image flex items-center'>
                                    <img className='w-[57px] mx-3' src={el.imageUrl} alt=""/>
                                    <p>{el.name}</p>
                                </div>
                                <DetailBtn/>
                            </div>
                        ))
                    }
                </div>
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
                    <button>Play Now</button>
                </div>
            </div>
        </section>
    );
};

export default MyOrder;