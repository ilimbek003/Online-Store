import React, {useEffect, useState} from "react";
import {HiArrowLongLeft} from "react-icons/hi2";
import {useNavigate} from "react-router";
import {TbFileSettings} from "react-icons/tb";
import {AiOutlineClose} from "react-icons/ai";
import {MdKeyboardArrowDown} from "react-icons/md";
import {GoPencil} from "react-icons/go";
import axios from "axios";
import {url} from "../Api";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../Redux/reduser/auth";

const Settings = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.users);
    useEffect(() => {
        dispatch(auth());
    }, [dispatch]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [emails, setEmails] = useState(false)
    const [email, setEmail] = useState("")
    const [notification, setNotification] = useState(false)
    const [local, setLocal] = useState(localStorage.getItem("tokens"));
    console.log(user)
    const headers = {
        Authorization: `Token ${local}`,
    };
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [isWishSelected, setIsWishSelected] = useState("");
    const handleCheckboxChange = (value) => {
        if (selectedOption === value) {
            setSelectedOption("");
        } else {
            setSelectedOption(value);
        }
    };
    const [selectedOption, setSelectedOption] = useState("");
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleSubmit = async () => {
        try {
            const data = {
                email: email,
                notification: notification,
            };
            const response = await axios.post(url + "/auth/notification", data, {headers});
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div id="modal">
            {" "}
            <div className="settings">
                <div className="nav">
                    <div className="container d-flex justify-content-between align-items-center ">
                        <HiArrowLongLeft onClick={() => navigate(-1)} className="fi"/>
                        <p className="header_name">Настройки</p>
                        <TbFileSettings className="fi" onClick={handleSubmit}/>
                    </div>
                </div>
                <div className="container">
                    <div className="settings_block">
                        {/*<h5 className="settings_title">Блокировка карты</h5>*/}
                        {/*<p className="settings_kart">*/}
                        {/*  Ваша карта Bekbekei:{" "}*/}
                        {/*  <span className="green">2 7000 08661 04</span>*/}
                        {/*</p>*/}
                        {/*<div className="toggle_block">*/}
                        {/*  <p>Заблокировать карту</p>*/}
                        {/*  <label className="switch">*/}
                        {/*    <input type="checkbox" />*/}
                        {/*    <span className="slider_toggle round"></span>*/}
                        {/*  </label>*/}
                        {/*</div>*/}
                        <h5 className="settings_title">Уведомления</h5>
                        <p className="settings_kart">
                            Акциялар жана атайын сунуштар тууралуу билдирме алыныз
                        </p>
                        <div className="toggle_block">
                            <p>Получать уведомления</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider_toggle round" onClick={() => setNotification(true)}></span>
                            </label>
                        </div>
                        <div className="toggle_block">
                            <p>Получать письма на email</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider_toggle round" onClick={() => setEmails(!emails)}></span>
                            </label>
                        </div>
                        <div>
                            {
                                emails && (
                                    <div>
                                        <input
                                            className="toggle_block"
                                            style={{outline: "none", border: 'none'}}
                                            type="text"
                                            placeholder="email"
                                            value={user.email === null ? email : user.email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                )
                            }
                        </div>
                        <h5 className="settings_title">Настройки приложения</h5>
                        <p className="settings_kart">
                            Автояркость нужна для корректного считывания штрихкода
                        </p>
                        <div className="toggle_block">
                            <p>Включить автояркость</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider_toggle round"></span>
                            </label>
                        </div>
                        <div className="input_box_modal" onClick={openModal}>
                            <label className="language">Интерфейстин тили</label>
                            <div className="toggle_block">
                                <input
                                    style={{}}
                                    className="input_option"
                                    type="button"
                                    value={selectedOption}
                                />
                                <MdKeyboardArrowDown
                                    onClick={openModal}
                                    className="right_icons"
                                    style={{cursor: "pointer"}}
                                    size={30}
                                />
                            </div>
                        </div>
                        {isModalOpen === true && (
                            <div className="filters_oll">
                                <div className="order">
                                    <div className="modal_content">
                                        <h3>Настройка приложения</h3>
                                        <AiOutlineClose
                                            className="close"
                                            style={{border: "none", background: "none"}}
                                            onClick={closeModal}
                                            size={20}
                                        />
                                    </div>
                                    <label className="detial">
                                        <input
                                            type="radio"
                                            value="Кыргыз"
                                            checked={selectedOption === "Кыргыз"}
                                            onChange={() => handleCheckboxChange("Кыргыз")}
                                            onClick={closeModal}
                                        />
                                        <p>Кыргыз</p>
                                    </label>
                                    <label className="detial">
                                        <input
                                            type="radio"
                                            value="Орус"
                                            checked={selectedOption === "Орус"}
                                            onChange={() => handleCheckboxChange("Орус")}
                                            onClick={closeModal}
                                        />
                                        <p>Орус</p>
                                    </label>
                                    <label className="detial">
                                        <input
                                            type="radio"
                                            value="Англисче"
                                            checked={selectedOption === "Англисче"}
                                            onChange={() => handleCheckboxChange("Англисче")}
                                            onClick={closeModal}
                                        />
                                        <p>Англисче</p>
                                    </label>
                                </div>
                            </div>
                        )}
                        <h5 className="settings_title akaunt_remove">Удалить акаунт</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
