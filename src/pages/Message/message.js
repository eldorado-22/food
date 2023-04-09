import React from 'react';
import './message.scss';
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";
import img from "../../assets/img/users.png"

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

                <div className="message">

                    <div className="message--card">

                        <div className="message--card__img">
                            <img src={img} alt="" width="30%"/>
                        </div>

                        <div className="message--card__desc">
                            <h3 className="message--card__desc--name">Adem Khan CEO</h3>
                            <h1 className="message--card__desc--title">Special Offer Just for You</h1>
                            <h4 className="message--card__desc--description">Lorem ipsum dolor sit amet consectetur.
                                Quis amet netus ut laoreet viverra jugue at proin volutpat. Aliquam posuere ornare</h4>
                        </div>

                    </div>

                    <div className="message--date">
                        <p>3 March 2023 8:35 PM</p>
                    </div>

                    <div className="message--secondCard">

                        <div className="message--secondCard__one">
                            <h3 className="Jasmin">Hello!</h3>
                            <h4 className="time">2:38 PM</h4>
                        </div>

                        <div className="message--secondCard__two">
                            <h3 className="Adem">Hi!</h3>
                            <h4 className="secondTime">2:40 PM</h4>
                        </div>

                        <div className="message--secondCard__one">
                            <h3 className="Jasmin">My name is Jasmin</h3>
                            <h4 className="time">2:57 PM</h4>
                        </div>

                        <div className="message--secondCard__two">
                            <h3 className="Adem">My name is Adem</h3>
                            <h4 className="secondTime">3:03 PM</h4>
                        </div>

                        <div className="message--secondCard__one">
                            <h3 className="Jasmin">What’s your phone number?</h3>
                            <h4 className="time">3:18 PM</h4>
                        </div>

                        <div className="message--secondCard__two">
                            <h3 className="Adem">Are you on Facebook?</h3>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Message;