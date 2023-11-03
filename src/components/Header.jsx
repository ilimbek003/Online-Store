import React from 'react';
import {FiUser} from "react-icons/fi"
import {BiBell} from "react-icons/bi"
import bekbekei from "../img/2.png"
import '../style/css/App.css'
import '../style/css/media.css'
import PersonalArea from "../pages/PersonalArea";

const Header = ({modal, setModal}) => {
    return (
        <div>
            <div className="container">
                <div className="nav d-flex justify-content-between align-items-center">
                    <FiUser className="fi" onClick={() => setModal(true)}/>
                    <img className="images" src={bekbekei} alt="Бекбекей"/>
                    <BiBell className="fi"/>
                </div>
                <PersonalArea modal={modal} setModal={setModal}/>
            </div>
        </div>
    );
};

export default Header;