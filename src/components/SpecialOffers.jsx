import React from "react";
import "../style/css/main.css";
import { useNavigate } from "react-router";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import promotionkg from "../../src/img/promotionkg.jpg";
import kola from "../../src/img/kola.jpg";
import manty from "../../src/img/manty.jpg";
import globus from "../../src/img/globus.jpg";
import hleb from "../../src/img/hleb.jpg";
const recoment = [
  {
    id: 1,
    image: kola,
  },
  {
    id: 2,
    image: promotionkg,
  },
  {
    id: 3,
    image: hleb,
  },
  {
    id: 4,
    image: globus,
  },
  {
    id: 5,
    image: hleb,
  },
];

const SpecialOffers = () => {
  const navigate = useNavigate();
  return (
    <div className="special_offers">
      <div className="container">
        <div className="title title_top">
          <p>Атайын сунуштар </p>
          <h4
            className="title_add"
            onClick={() => navigate("/special-details")}
          >
            Бардыгы
            <MdOutlineKeyboardArrowRight size={20} />
          </h4>
        </div>
        <div className="special_block_all">
          {recoment.map((el, id) => (
            <div
              key={id}
              onClick={() => navigate(`/special-details-id/${el.id}`)}
              className="special_box"
            >
              <div className="div_box">
                <img className="special_image" src={el.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
