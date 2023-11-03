import React, {useState} from 'react';
import {FiUser} from "react-icons/fi"
import {BiBell} from "react-icons/bi"
import bekbekei from "../img/2.png"
import '../style/css/App.css'
import '../style/css/media.css'
import PersonalArea from "../pages/PersonalArea";
import {HiArrowLongLeft} from "react-icons/hi2";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="container">
                <div className="nav d-flex justify-content-between align-items-center">
                    <FiUser className="fi" onClick={() => setIsOpen(true)} />
                    <img className="images" src={bekbekei} alt="Бекбекей"/>
                    <BiBell className="fi"/>
                </div>
                <PersonalArea isOpen={isOpen} setIsOpen={setIsOpen} />
                {/*{*/}
                {/*    modal === true && (*/}
                {/*        <div id="modal">*/}
                {/*            <div className="nav d-flex justify-content-between align-items-center">*/}
                {/*                <HiArrowLongLeft className="fi" onClick={() => setModal(false)}/>*/}
                {/*                <h4>Кабарлоо</h4>*/}
                {/*                <div/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*}*/}
            </div>
        </div>
    );
};

export default Header;