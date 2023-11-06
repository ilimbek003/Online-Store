import React from 'react';
import {HiArrowLongLeft,HiMiniArrowRightOnRectangle} from "react-icons/hi2";
import "../style/css/App.css"
import "../style/css/main.css"
import "../style/css/modal.css"
import {useNavigate} from "react-router-dom";
import {BsBookmark} from "react-icons/bs";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
const Basket = ({saveToLocalStorage, handlePlus, plus, handleMinus}) => {
    const navigate = useNavigate()
    const plusCartFromLocalStorage = JSON.parse(localStorage.getItem('shopCart'));
    return (
        <div id="modal">
            <div className="nav">
                <div className="container d-flex justify-content-between align-items-center">
                    <HiArrowLongLeft onClick={() => navigate(-1)} className="fi"/>
                    <h4 className="title_h5 all_title_one">Корзина</h4>
                    <HiMiniArrowRightOnRectangle className="fi"/>
                </div>
            </div>
            <div className="container">
                <div className="row mt-4">
                    {plusCartFromLocalStorage.map((el) => (
                        <div className="col-6 mt-4" key={el.id}>
                            <div
                                className="blocks"
                                onClick={() => navigate(`/shop-all/product/${el.id}`)}
                            >
                                <img src={el.images} alt=""/>
                                {
                                    (plus[el.id] || 0) === 0 ? "" :
                                        <div
                                            className={
                                                localStorage.getItem(`activePlus_${el.id}`) === 'active_plus'
                                                    ? 'hover_blocks'
                                                    : ''
                                            }
                                        >
                                            <h1>{plus[el.id]}</h1>
                                        </div>
                                }
                            </div>
                            <div className="all">
                                <h3 className="title_one mt">{el.title}</h3>
                                <div className="d-flex  justify-content-between mt-2">
                                    <p className="project">
                                        <span>{el.pack}</span>
                                    </p>
                                    <h2>{el.price} сом</h2>
                                </div>
                            </div>
                            <div className="flex mt-2">
                                <div className="marks">
                                    <BsBookmark
                                        className={
                                            localStorage.getItem(`activeItem_${el.id}`) === 'active'
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() => saveToLocalStorage(el.id)}
                                    />
                                </div>
                                <div className={
                                    localStorage.getItem(`activePlus_${el.id}`) === 'active_plus'
                                        ? 'active_plus'
                                        : 'plus'
                                }>
                                    {
                                        (plus[el.id] || 0) === 0 ? "" : <AiOutlineMinus
                                            className={
                                                localStorage.getItem(`activePlus_${el.id}`) === 'active_plus'
                                                    ? 'fi_ones'
                                                    : 'fi'
                                            }
                                            onClick={() => handleMinus(el.id)}
                                        />
                                    }
                                    <p className={
                                        localStorage.getItem(`activePlus_${el.id}`) === 'active_plus'
                                            ? 'fi_ones'
                                            : 'title_one font'
                                    }
                                    >

                                        {
                                            (plus[el.id] || 0) === 0 ? " Кошуу" : plus[el.id]
                                        }
                                    </p>
                                    <AiOutlinePlus
                                        className={
                                            localStorage.getItem(`activePlus_${el.id}`) === 'active_plus'
                                                ? 'fi_ones'
                                                : 'fi ai_out'
                                        }
                                        onClick={() => handlePlus(el.id)}
                                    />
                                </div>
                            </div>
                            {
                                (plus[el.id] || 0) === 0 ? "" :
                                    <div className="container">
                                        <button className="btn_button" onClick={() => navigate("/shop-all/basket")}>
                                            {plus[el.id]} - {plus[el.id] * el.price}
                                        </button>
                                    </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Basket;