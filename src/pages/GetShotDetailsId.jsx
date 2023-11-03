import React from "react";
import "../style/css/main.css";
import { useNavigate, useParams } from "react-router";
import { IoMdClose } from "react-icons/io";
import smetana from "../../src/img/сметана.jpg";
import djen from "../../src/img/джин.jpeg";
import burger from "../../src/img/burger.jpg";
import krem from "../../src/img/krem.svg";

const shot = [
  {
    id: 1,
    the_time: " 16-31.10.23",
    image: burger,
    low_price: 1200,
    price: 80,
    precent: "-21%",
    news: "адал озубуздун продукция",
  },
  {
    id: 2,
    the_time: "16-31.10.23",
    image: krem,
    low_price: 120,
    price: 30,
    precent: "-21%",
    news: "адал озубуздун продукция",
  },
  {
    id: 3,
    the_time: " 16-31.10.23",
    image: smetana,
    low_price: 120,
    price: 80,
    precent: "-21%",
    news: "адал озубуздун продукция",
  },
  {
    id: 4,
    the_time: "16-31.10.23",
    image: djen,
    low_price: 120,
    price: 30,
    precent: "-21%",
    news: "адал озубуздун продукция lbgdmkb n lskf/dgnkdgf n grn rkn  nkrsgn 'rsion rsn gi nrtgin g ",
  },
  {
    id: 5,
    the_time: "16-31.10.23",
    image: djen,
    low_price: 120,
    price: 30,
    precent: "-21%",
    news: "адал озубуздун продукция kjsbvskjbv ",
  },
];

const GetShotDetailsId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="get_shot_details_id">
      <div className="container d-flex justify-content-between align-items-center ">
        <span></span>
        <p>Акциянын шарттары</p>
        <IoMdClose
          className="fi"
          onClick={() => navigate("/promotion")}
          size={22}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="container">
        <div className="details_title">
          <h4>01.11-15.11</h4>
          <h4>Успей купить</h4>
        </div>
        <div className="get_details_block_all">
          {shot.map((el) =>
            el.id == id ? (
              <div key={id} className="get_block get_details_block">
                <div className="date display">
                  <span className="title_h6 the_time">{el.the_time}</span>
                </div>
                <div className="relative_block">
                  <div className="relative">
                    <div className="shot_news_block display">
                      <div className="shot_news display">
                        <img src={el.image} alt="" />
                      </div>
                      <div className="price_all price_details">
                        <h2>{el.low_price}</h2>
                        <div className="cheap_price display">
                          <h2 className="cheap_price_text display">
                            {el.price}
                          </h2>
                        </div>
                        <div className="none"></div>
                        <div className="precent_box display">
                          <h6 className="precent_text">{el.precent}</h6>
                        </div>
                      </div>
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

export default GetShotDetailsId;
