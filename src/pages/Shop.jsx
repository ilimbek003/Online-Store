import React, { useState, useEffect } from "react";
import "../style/css/App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../Api";
import bekbekei from "../img/bekbekei-h-logo.svg";
import { HiArrowLongLeft } from "react-icons/hi2";

const Shop = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(url + "/product/categories")
      .then((response) => setData(response.data))
      .catch();
  }, []);
  return (
    <>
      <div className="nav">
        <div className="container nav_content">
          <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
          <img src={bekbekei} alt="" />
          <div />
        </div>
      </div>
      <div className="container">
        <div className="all_shop">
          {data.map((el) => (
            <div
              className="shops"
              key={el.id}
              onClick={() => navigate(`/shop-all/shop/${el.id}`)}
            >
              <h5 className="title_one">{el.name}</h5>
              <div className="img_container">
                <img src={el.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
