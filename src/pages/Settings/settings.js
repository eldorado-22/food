import React, {useState} from 'react';
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";
import './settings.scss';
import user from './../../assets/img/users.png'
import {RiUser3Line} from "react-icons/ri";
import {BsCashCoin, BsInstagram, BsWhatsapp} from "react-icons/bs";
import {TbLock} from "react-icons/tb";
import {FaUserFriends} from "react-icons/fa";
import {MdNotifications} from "react-icons/md";
import {BiLogOut} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const logOut = () => {
        dispatch({type: 'LOG_OUT'})
    }
    const {account} = useSelector(state => state)

    let name = ''

    account.map(el => {
        if (el.inAcc){
            name = el.name
        }
    })
    return (<div id="settings">
import {elKart, mbank, visa} from "../../components/FakeBackend/FakeBackend";
import {AiFillFacebook} from "react-icons/ai";

const Settings = () => {
    const [payment, setPayment] = useState(false)
    const [social, setSocial] = useState(false)

    return (
        <div style={{
            backdropFilter: payment === true ? "blur(5px)" : "",
            background: payment === true ? "rgba(0,0,0,0.7)" : ""
        }} id="settings">
            <div className="container">
                <div className="settings">
                    <div className="settings--B">
                        <BurgerMenuTwo/>
                        <h1>Settings</h1>
                    </div>
                    <h2>Profile</h2>

                    <div className="settings--profile">
                        <div>
                            <p>{name[0].toUpperCase()}</p>
                        </div>
                        <h1>{name}</h1>
                    </div>

                    <div style={{
                        backdropFilter: payment === true ? "blur(10px)" : "",
                        background: payment === true ? "rgba(133,133,133,0.62)" : ""
                    }} className="settings--personal">
                        <RiUser3Line className="settings--personal__icon"/>
                        <h3>Personal Details</h3>
                    </div>

                    <div style={{
                        backdropFilter: payment === true ? "blur(10px)" : "",
                        background: payment === true ? "rgba(133,133,133,0.62)" : ""
                    }} onClick={() => setPayment(true)} className="settings--payment">
                        <BsCashCoin className="settings--payment__icon"/>
                        <h3>Payment Method</h3>
                    </div>

                    <div onClick={()=> {logOut(); navigate('/signIn')}} className="settings--login">
                    <div style={{
                        display: payment === true ? "block" : "none",
                    }} className="settings--share">

                        <div className="settings--share__text">
                            <h2>Payment</h2>
                            <button onClick={() => {
                                setPayment(false)
                            }} className="settings--share__text--icon">
                                &times;
                            </button>
                        </div>

                        <div className="settings--share__payment">
                            <div className="settings--share__payment--elKart">
                                {
                                    elKart.map(el => (
                                        <img src={el.imageUrl} alt="img"/>
                                    ))
                                }
                            </div>
                            <div className="settings--share__payment--mBank">
                                {
                                    mbank.map(el => (
                                        <img src={el.imageUrl} alt="img"/>
                                    ))
                                }
                            </div>
                            <div className="settings--share__payment--visa">
                                {
                                    visa.map(el => (
                                        <img src={el.imageUrl} alt="img"/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div style={{
                        background: payment === true ? "rgba(133,133,133,0.62)" : "",
                    }} className="settings--login">
                        <TbLock className="settings--login__icon"/>
                        <h3>Login & Password</h3>
                    </div>

                    <div style={{
                        background: payment === true ? "rgba(133,133,133,0.62)" : "",
                    }} onClick={() => setSocial(true)}
                         className="settings--friend">
                        <FaUserFriends className="settings--friend__icon"/>
                        <h3>Invite a Friend</h3>
                    </div>

                    <div style={{
                        display: social === true ? "block" : "none",
                    }} className="settings--invites">

                        <div className="settings--invites__text">
                            <h3>Share Friends</h3>
                            <button onClick={() => {
                                setSocial(false)
                            }} className="settings--invites__text--icon">
                                &times;
                            </button>
                        </div>

                        <div className="settings--invites__social">
                            <div className="settings--invites__social--whatsapp">
                                <a href="https://b24-pememt.bitrix24.site/crm_form_p2gyo/">
                                    <BsWhatsapp
                                        className="settings--invites__social--whatsapp__icon"
                                    />
                                </a>
                            </div>

                            <div className="settings--invites__social--instagram">
                                <a href="https://www.instagram.com/motion_web/">
                                    <BsInstagram
                                        className="settings--invites__social--instagram__icon"
                                    />
                                </a>
                            </div>
                            <div className="settings--invites__social--facebook">
                                <a style={{display: "flex", alignItems: "center"}}
                                   href="https://www.instagram.com/motion_web/">
                                    <AiFillFacebook
                                        className="settings--invites__social--facebook__icon"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        background: payment === true ? "rgba(133,133,133,0.62)" : "",
                    }} className="settings--notification">
                        <MdNotifications className="settings--notification__icon"/>
                        <h3>Notification</h3>
                    </div>

                    <div onClick={()=> {logOut(); navigate('/')}} className="settings--logOut">
                        <BiLogOut className="settings--notification__icon"/>
                        <h3>Log Out</h3>
                    </div>

                </div>
            </div>
        </div>);
};

export default Settings;