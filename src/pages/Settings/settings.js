import React from 'react';
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";
import './settings.scss';
import user from './../../assets/img/users.png'
import {RiUser3Line} from "react-icons/ri";
import {BsCashCoin} from "react-icons/bs";
import {TbLock} from "react-icons/tb";
import {FaUserFriends} from "react-icons/fa";
import {MdNotifications} from "react-icons/md";

const Settings = () => {
    return (<div id="settings">
        <div className="container">
            <div className="settings">
                <div className="settings--B">
                    <BurgerMenuTwo/>
                    <h1>Settings</h1>
                </div>
                <h2>Profile</h2>

                <div className="settings--profile">
                    <img src={user} alt="img"/>
                    <h1>Adem Khan</h1>
                </div>

                <div className="settings--personal">
                    <RiUser3Line className="settings--personal__icon"/>
                    <h3>Personal Details</h3>
                </div>

                <div className="settings--payment">
                    <BsCashCoin className="settings--payment__icon"/>
                    <h3>Payment Method</h3>
                </div>

                <div className="settings--login">
                    <TbLock className="settings--login__icon"/>
                    <h3>Login & Password</h3>
                </div>

                <div className="settings--friend">
                    <FaUserFriends className="settings--friend__icon"/>
                    <h3>Invite a Friend</h3>
                </div>

                <div className="settings--notification">
                    <MdNotifications className="settings--notification__icon"/>
                    <h3>Notification</h3>
                </div>
            </div>
        </div>
    </div>);
};

export default Settings;