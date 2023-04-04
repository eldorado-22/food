import React from 'react';
import './message.scss';
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";

const Message = () => {
    return (
        <section id="chat">
            <div className="container">
                <div className="chat">
                    <div className="chat--B">
                        <BurgerMenuTwo/>
                        <h1>Chat</h1>
                    </div>
                    <div className="chat--message">
                        <h2>Message</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Message;