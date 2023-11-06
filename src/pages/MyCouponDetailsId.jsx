import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router";
import burger from "../img/burger.jpg";
import shoro from "../img/shoro.jpg";
import or_cod from "../img/qr-код.gif";

const coupon = [
  {
    id: 1,
    image: burger,
    skidka: "Только для вас! Скидка на кетчуп",
    date: "18 октябрдан 22 октябырга чейин",
    qr_cod: or_cod,
  },
  {
    id: 2,
    image: shoro,
    skidka: "Только для вас! Скидка на шоро",
    date: "18 октябрдан 22 октябырга чейин",
    qr_cod: or_cod,
  },
];

const MyCouponDetailsId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="my_coupon_details_id">
        fatsgrkilokjmnhbgfdsaadfghjklhjhgf
      <div className="nav">
        <div className="container d-flex justify-content-between align-items-center ">
          <span></span>
          <h4 className="my_coupon_text">Купон</h4>
          <IoMdClose
            onClick={() => navigate("/")}
            className="icons"
            style={{ cursor: "pointer" }}
            size={20}
          />
        </div>
      </div>
      <div className="container">
        <div className=" coupon_details">
          {coupon.map((el) =>
            el.id == id ? (
              <div
                key={id}
                className="coupon_box"
                onClick={() => navigate(`/my-coupon-details-id/${el.id}`)}
              >
                <div className="title_goods">
                  <img src={el.image} alt="" />
                </div>
                <div className="text_box">
                  <h3 className="title_h5 mt-4">{el.skidka}</h3>
                  <div className="d-flex align-items-center">
                    <p className="title_h6 pro">{el.date}</p>
                    <div className="or_cod_little">
                      <img src={el.qr_cod} alt="" />
                    </div>
                  </div>
                </div>
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

export default MyCouponDetailsId;
