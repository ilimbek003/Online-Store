import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {HiArrowLongLeft} from "react-icons/hi2";
import {BsSearch} from "react-icons/bs"
import {FiFilter} from "react-icons/fi"
import {HiOutlineArrowsUpDown} from "react-icons/hi2"
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import {BsBookmark} from 'react-icons/bs';

const ShopDetail = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [tabs, setTabs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`https://nurbektmusic.pythonanywhere.com/product/by-cat/${id}`)
            .then((response) => setData(response.data))
            .catch();
    }, [id]);
    const handleId = (selectedId) => {
        axios
            .get(`https://nurbektmusic.pythonanywhere.com/product/list/sub_cat/${selectedId}`)
            .then((response) => setTabs(response.data))
            .catch();
    };

    useEffect(() => {
        handleId(id);
    }, [id]);
    return (
        <div id="modal">
            <div className="nav">
                <div className="container d-flex justify-content-between align-items-center">
                    <HiArrowLongLeft className="fi" onClick={() => navigate('/shop')}/>
                    <h4 className="title_h5 all_title_one mt-2">{data && data[0] && data[0].name}</h4>
                    <BsSearch className="fi" onClick={() => navigate('/search')}/>
                </div>
                <div className="container d-flex  align-items-center mt-3 scroll">
                    {
                        tabs.map((el) => (
                            <div className="from_btn" key={el.id}>
                                <button className="btn_tabs">{el.name}</button>
                            </div>
                        ))
                    }
                </div>
                <div className="container mt-3">
                    <div className="filter">
                        <div className="dnow d-flex align-items-center" onClick={() => navigate('/filter')}>
                            <FiFilter className="icons"/>
                            <h6 className="title_h6  item_one">Фильтр</h6>
                        </div>
                        <div className="dnow d-flex align-items-center">
                            <HiOutlineArrowsUpDown className="icons"/>
                            <h6 className="title_h6 item_one ">Иретоо</h6>
                        </div>
                    </div>
                </div>
                <div className="line"/>
            </div>
            <div className="container">
                <div className="row">
                    {data.map((el, index) => (
                        <div className="col-6" key={el.id}>
                            <div
                                className="blocks"
                                onClick={() => navigate(`/product/${el.id}`)}
                            >
                                <img src={el.images} alt=""/>
                            </div>
                            <div className="all">
                                <h3>{el.title}</h3>
                                <div className="d-flex  justify-content-between">
                                    <p className="project">
                                        <span>{el.pack}</span>
                                    </p>
                                    <h2>{el.price} сом</h2>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mark">
                                    <BsBookmark
                                        className="fi"
                                    />
                                </div>
                                <div className="plus ">
                                    {/*<AiOutlineMinus*/}
                                    {/*    className="fi"*/}
                                    {/*/>*/}
                                    <p>
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
        </div>

    );
};

export default ShopDetail;