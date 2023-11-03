import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";
import "../style/css/main.css";
import smetana from '../../src/img/сметана.jpg'
import djen from '../../src/img/джин.jpeg'

const shot = [
  {
    id: 1,
    the_time: "акция 16-31.10.23",
    image: smetana,
    low_price: 1200,
    price: 80,
    precent: "-21%",
    news: "адал озубуздун продукция",
  },
  {
    id: 2,
    the_time: "акция 16-31.10.23",
    image: djen,
    low_price: 120,
    price: 30,
    precent: "-21%",
    news: "адал озубуздун продукция",
  },
  {
    id: 3,
    the_time: "акция 16-31.10.23",
    image: smetana,
    low_price: 120,
    price: 80,
    precent: "-21%",
    news: "адал озубуздун продукция",
  },
  {
    id: 4,
    the_time: "акция 16-31.10.23",
    image: djen,
    low_price: 120,
    price: 30,
    precent: "-21%",
    news: "адал озубуздун продукция ",
  },
  {
    id: 5,
    the_time: "акция 16-31.10.23",
    image: djen,
    low_price: 120,
    price: 30,
    precent: "-21%",
    news: "адал озубуздун продукция",
  },
];

const GetShot = () => {
  const navigate = useNavigate();
  return (
    <div className="get_shot">
      <div className="container">
        <div className="title">
          <p>Сатып алууга шашыл</p>
          <h4
            className="title_add"
            onClick={() => navigate("/get-shot-details")}
          >
            Бардыгы <MdOutlineKeyboardArrowRight size={20} />
          </h4>
        </div>
        <div className="get_block_all">
          {shot.map((el, id) => (
            <div
              key={id}
              className="get_block"
              onClick={() => navigate(`/get-shot-box-details/${el.id}`)}
            >
              <div className="time">
                <span>{el.the_time}</span>
              </div>
              <div className="get_box_all">
                <div className="get_box">
                  <img src={el.image} alt="" />
                </div>
              </div>
              <span className="shot_news">{el.news}</span>
              <div className="price">
                <div className="low_price">
                  <span>{el.low_price}</span>
                  <div className="precent">
                    <span>{el.precent}</span>
                  </div>
                  <div className="none"></div>
                </div>
                <div className="price_nav">
                  <span>{el.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetShot;
