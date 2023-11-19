import React from 'react';
import {Route, Routes} from "react-router-dom";
import Registration from "../pages/Registration";
import RegistrationQuestionnaire from "../pages/RegistrationQuestionnaire";
import Login from "../pages/Login";
import ResetThePassword from "../pages/ResetThePassword";
import Activation from "../pages/Activation";
import ActivationCode from "../pages/ActivationCode";
import NewResetThePassword from "../pages/NewResetThePassword";
import Slider from "react-slick";
import mobile from "../img/mobile.svg";

const ToComeIn = () => {
    return (
        <>
            <div className="background_register_login">
                <Routes>
                    <Route
                        path="/registration"
                        element={<Registration Alert={FuncAlert}/>}
                    />
                    <Route
                        path="/registration-questionnare"
                        element={<RegistrationQuestionnaire/>}
                    />
                    <Route path="/login" element={<Login Alert={FuncAlert}/>}/>
                    <Route
                        path="/reset-the-password"
                        element={<ResetThePassword Alert={FuncAlert}/>}
                    />
                    <Route
                        path="/activation"
                        element={<Activation Alert={FuncAlert}/>}
                    />
                    <Route
                        path="/activation-code"
                        element={<ActivationCode Alert={FuncAlert}/>}
                    />
                    <Route path="/new-reset-password" element={<NewResetThePassword Alert={FuncAlert}/>}/>
                </Routes>
                <div className="container">
                    <Slider {...settings}>
                        <div className="mobile">
                            <img src={mobile} alt=""/>
                            <h5>Все операции в единой платформе</h5>
                            <p>Пополняйте и выводите фиатные средства или криптовалюту, конвертируйте
                                фиатные деньги
                                в
                                криптовалюту и наоборот, заказывайте криптокарты и даже бизнес-джеты в
                                единой
                                платформе.</p>
                        </div>
                        <div className="mobile">
                            <img src={mobile} alt=""/>
                            <h5>Все операции в единой платформе</h5>
                            <p>Пополняйте и выводите фиатные средства или криптовалюту, конвертируйте
                                фиатные деньги
                                в
                                криптовалюту и наоборот, заказывайте криптокарты и даже бизнес-джеты в
                                единой
                                платформе.</p>
                        </div>
                        <div className="mobile">
                            <img src={mobile} alt=""/>
                            <h5>Все операции в единой платформе</h5>
                            <p>Пополняйте и выводите фиатные средства или криптовалюту, конвертируйте
                                фиатные деньги
                                в
                                криптовалюту и наоборот, заказывайте криптокарты и даже бизнес-джеты в
                                единой
                                платформе.</p>
                        </div>
                    </Slider>
                    <div>
                        <div className="register_login">
                            <div>
                                <button
                                    onClick={() => navigate("/registration")}
                                    className="registr_btn all_register_btn"
                                >
                                    Регистрация
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => navigate("/login")}
                                    className="registr_btn"
                                >
                                    Войти
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToComeIn;