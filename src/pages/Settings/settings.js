import React from 'react';
import BurgerMenuTwo from "../../components/Burger-Menu-Two/Burger-Menu-Two";
import './settings.scss';

const Settings = () => {
    return (
        <div id="settings">
            <div className="container">
                <div className="settings">
                    <div className="settings--B">
                        <BurgerMenuTwo/>
                        <h1>Settings</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Settings;