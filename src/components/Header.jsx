import React, {useState} from 'react';
import {FiUser} from "react-icons/fi"
import {BiBell} from "react-icons/bi"
import bekbekei from "../img/2.png"
import '../style/css/App.css'
import '../style/css/media.css'
import "../style/css/main.css"
import PersonalArea from "../pages/PersonalArea";
import {HiArrowLongLeft} from "react-icons/hi2";
import {AiOutlineNotification} from "react-icons/ai"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpens, setIsOpens] = useState(false);

    return (
        <div>
            <div className="container">
                <div className="nav">
                    <div className="container d-flex justify-content-between align-items-center">
                        <FiUser className="fi" onClick={() => setIsOpen(true)}/>
                        <img className="images" src={bekbekei} alt="Бекбекей"/>
                        <BiBell className="fi" onClick={() => setIsOpens(true)}/>
                    </div>
                </div>
                <PersonalArea isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            {
                isOpens === true && (
                    <div id="modal">
                        <div className="nav">
                            <div className="container d-flex justify-content-between align-items-center">
                                <HiArrowLongLeft className="fi" onClick={() => setIsOpens(false)}/>
                                <h4 className="title_h5 all_title mt-2">Кабарлоо</h4>
                                <div/>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Header;