import React from 'react';
import {FiUser} from "react-icons/fi"
import {BiBell} from "react-icons/bi"
import bekbekei from "../img/2.png"
import '../style/css/App.css'
import '../style/css/media.css'
const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="nav d-flex justify-content-between align-items-center">
                     <FiUser className="fi"/>
                    <img className="images" src={bekbekei} alt="Бекбекей"/>
                    <BiBell className="fi"/>
                </div>
            </div>
        </div>
    );
};

export default Header;