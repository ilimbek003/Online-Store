import React from "react";
import "../style/css/main.css";
import big_burger from "../../src/img/burger_big.jpg";
import { useNavigate } from "react-router";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const recoment = [
  {
    id: 1,
    image: big_burger,
  },
  {
    id: 2,
    image: big_burger,
  },
  {
    id: 3,
    image: big_burger,
  },
  {
    id: 4,
    image: big_burger,
  },
  {
    id: 5,
    image: big_burger,
  },
];

const SpecialOffers = () => {
  const navigate = useNavigate();
  return (
    <div className="special_offers">
      <div className="container">
        <div className="title">
          <p>Атайын сунуштар </p>
          <h4
            className="title_add"
            onClick={() => navigate("/promotion-details")}
          >
            Бардыгы
            <MdOutlineKeyboardArrowRight size={20} />
          </h4>
        </div>
        <div className="recommendations_block_all">
          {recoment.map((el, id) => (
            <div
              key={id}
              onClick={() => navigate(`/box-details/${el.id}`)}
              className="recommendations_box"
            >
              <img className="recomen_image" src={el.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
