import React from "react";
import "../style/css/main.css";
import { useNavigate } from "react-router";
import { HiArrowLongLeft } from "react-icons/hi2";
import promotionkg from "../../src/img/promotionkg.jpg";
import kola from "../../src/img/kola.jpg";
import manty from "../../src/img/manty.jpg";
import globus from "../../src/img/globus.jpg";
import hleb from "../../src/img/hleb.jpg";

const shot = [
  {
    id: 1,
    image: hleb,
  },
  {
    id: 2,
    image: globus,
  },
  {
    id: 3,
    image: kola,
  },
  {
    id: 4,
    image: promotionkg,
  },
  {
    id: 5,
    image: manty,
  },
];

const GetShotDetails = () => {
  const navigate = useNavigate();

  return (
    <div id="modal">
      <div className="nav">
        <div className="container d-flex justify-content-between align-items-center ">
          <HiArrowLongLeft
            className="fi"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
            size={20}
          />
          <p>Бардык акциялар</p>
          <span></span>
        </div>
      </div>
      <div className="get_shot_details top">
        <div className="container">
          <div className="get_details_block_all top_all">
            {shot.map((el, id) => (
              <div
                key={id}
                onClick={() => navigate(`/get-shot-details-id/${el.id}`)}
                className="special_details_box"
              >
                <img className="special_image" src={el.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetShotDetails;
