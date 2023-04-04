import React from 'react';
import {NavLink} from "react-bootstrap";
import {BsCalendarHeartFill, BsQuestionCircle} from "react-icons/bs";
import {CgCloseO} from "react-icons/cg";
import {IoHomeSharp, IoSettingsSharp} from "react-icons/io5";
import {MdMessage} from "react-icons/md";
import {Link} from "react-router-dom";

const BurgerMenu = ({burger, setBurger}) => {
    return (
        <div className="burger" style={{
            left: !burger ? '-1500px' : '0',
            backdropFilter: !burger ? 'blur(10px)' : '2000px'
        }}>
            <div className='menu'>
                <div className='menu--group'>
                    <NavLink to={'/'}>
                        <h1 onClick={() => setBurger(!burger)}>Food</h1>
                    </NavLink>
                    <CgCloseO className='menu--group__icon' onClick={() => setBurger(!burger)}/>
                </div>

                <Link to={'/'} >
                    <div className='menu--home' onClick={() => setBurger(!burger)}>
                        <div className="menu--home__block">
                            <IoHomeSharp className='menu--home__block--icon'/>
                            <h3>Home</h3>
                        </div>
                    </div>
                </Link>

                <Link to={'/order'}>
                    <div className='menu--order' onClick={() => setBurger(!burger)}>
                        <div className="menu--order__block">
                            <BsCalendarHeartFill className='menu--order__block--icon'/>
                            <h3>Order</h3>
                        </div>
                    </div>
                </Link>

                <Link to={'/message'}>
                    <div className='menu--message' onClick={() => setBurger(!burger)}>
                        <div className="menu--message__block">
                            <MdMessage className='menu--message__block--icon'/>
                            <h3>Message</h3>
                        </div>
                    </div>
                </Link>

                {/*<Link to={'/address'}>*/}
                {/*    <div className='menu--address' onClick={() => setBurger(!burger)}>*/}
                {/*        <div className="menu--address__block">*/}
                {/*            <MdMessage className='menu--address__block--icon'/>*/}
                {/*            <h3>Address</h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Link>*/}

                <Link to={'/settings'}>
                    <div className='menu--settings' onClick={() => setBurger(!burger)}>
                        <div className="menu--settings__block">
                            <IoSettingsSharp className='menu--settings__block--icon'/>
                            <h3>Settings</h3>
                        </div>
                    </div>
                </Link>

            </div>

        </div>
    );
};

export default BurgerMenu;