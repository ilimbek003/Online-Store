import React from "react";
import "../style/css/main.css";
import promotionkg from "../../src/img/promotionkg.jpg";
import kola from "../../src/img/kola.jpg";
import manty from "../../src/img/manty.jpg";
import globus from "../../src/img/globus.jpg";
import hleb from "../../src/img/hleb.jpg";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router";

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
    image: promotionkg,
  },
  {
    id: 5,
    image: hleb,
  },
];

const SpecialDetailsId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="special_details_id">
      <div className="container">
        <div className="container d-flex justify-content-between align-items-center ">
          <span></span>
          <p>сунуштардын шарттары</p>
          <IoMdClose
            className="fi"
            onClick={() => navigate("/promotion")}
            size={22}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="details_title">
          <h4>19.09-31.10</h4>
          <h4>супер комбо!!</h4>
        </div>
        <div className="special_details_block_all">
          {recoment.map((el) =>
            el.id == id ? (
              <div
                onClick={() => navigate(`/special-details-id/${el.id}`)}
                className="special_details_box"
              >
                <img className="special_image" src={el.image} alt="" />
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialDetailsId;
