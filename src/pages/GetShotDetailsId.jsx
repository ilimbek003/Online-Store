import React from "react";
import "../style/css/main.css";
import { useNavigate, useParams } from "react-router";
import { IoMdClose } from "react-icons/io";
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

const GetShotDetailsId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div id="modal">
      <div className="get_shot_details_id">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center ">
            <span></span>
            <p>Акциянын шарттары</p>
            <IoMdClose
              className="fi"
              onClick={() => navigate(-1)}
              size={22}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="container">
          <div className="details_title">
            <h4>01.11-15.11</h4>
            <h4>Успей купить</h4>
          </div>
          <div className="get_details_block_all">
            {shot.map((el) =>
              el.id == id ? (
                <div className="special_details_box">
                  <img className="special_image" src={el.image} alt="" />
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetShotDetailsId;
