import React, {useState, useEffect} from 'react';
import "../style/css/App.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {url} from "../Api";

const Shop = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(url + '/product/categories')
            .then((response) => setData(response.data))
            .catch()
    }, [])
    return (
        <>
            <div className="nav" onClick={() =>  navigate('/shop-all/search')}>
                <div className="container d-flex justify-content-between align-items-center">
                    <input className="input_form_all" type="text" placeholder="Товарларды табуу"/>
                </div>
            </div>
            <div className="container">
                <div className="all_shop">
                    {
                        data.map((el) => (
                            <div className="shops" key={el.id}
                                 onClick={() => navigate(`/shop-all/shop/${el.id}`)}>
                                <h5 className="title_one">{el.name}</h5>
                                <div className="img_container">
                                    <img src={el.img} alt=""/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Shop;