import React from 'react';
import Slider from "react-slick";
import mobile from "../img/mobile.svg";
import {useNavigate} from "react-router";

const ToComeIn = () => {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500
    };
    const navigate = useNavigate();
    return (
        <>
            <div className="background_register_login">
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