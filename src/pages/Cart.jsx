import React from 'react';
import {HiArrowLongLeft, HiOutlineArrowsUpDown} from "react-icons/hi2";
import {BsBookmark, BsSearch} from "react-icons/bs";
import {AiOutlineClose, AiOutlinePlus} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import icons from "../img/39ecb5044ff738dd9a74c9174b026b8e.jpg"

const Cart = ({saveToLocalStorage}) => {
    const navigate = useNavigate()
    const plusCartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
    return (
        <div>
            <>
                <div id="modal">
                    <div className="nav">
                        <div className="container d-flex justify-content-between align-items-center">
                            <HiArrowLongLeft className="fi" onClick={() => navigate("/dashboard")}/>
                            <h4 className="title_h5 all_title_one">
                                Тандалган таварлар
                            </h4>
                            <div/>
                            <div/>
                        </div>
                    </div>
                    {
                        plusCartFromLocalStorage && plusCartFromLocalStorage.length > 0 ? (
                            <div className="container">
                                <div className="row mt-5">
                                    {plusCartFromLocalStorage.map((el) => (
                                        <div className="col-6 mt-4" key={el.id}>
                                            <div
                                                className="blocks"
                                                onClick={() => navigate(`/product/${el.id}`)}
                                            >
                                                <img src={el.images} alt=""/>
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
                                                        onClick={() => saveToLocalStorage(el.id)}
                                                        className={
                                                            localStorage.getItem(`activeItem_${el.id}`) === 'active'
                                                                ? 'active'
                                                                : ''
                                                        }
                                                    />
                                                </div>
                                                <div className="plus ">
                                                    {/*<AiOutlineClose*/}
                                                    {/*    className="fi"/>*/}
                                                    <p className="title_one font">
                                                        Кошуу
                                                    </p>
                                                    <AiOutlinePlus
                                                        className="fi ai_out"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="ionic">
                                <img src={icons} alt=""/>
                                <h3>Бул жер азырынча бош</h3>
                                <p>Бул жер дукондогу белгиленген <br/> товарлар корсотулор</p>
                            </div>
                        )
                    }

                </div>
            </>
        </div>
    );
};

export default Cart;