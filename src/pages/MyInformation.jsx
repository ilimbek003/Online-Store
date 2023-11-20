import React, { useEffect, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbFileSettings } from "react-icons/tb";
import IMask from "imask";

const data = [
  {
    name: "1",
  },
  {
    name: "2",
  },
  {
    name: "3",
  },
  {
    name: "4",
  },
  {
    name: "5",
  },
];

const MyInformation = () => {
  const [info, setInfo] = useState({
    family: "",
  });
  useEffect(() => {
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      const masked = IMask(phoneInput, {
        mask: "+996 (000) 00-00-00",
      });
    }
  });

  const navigate = useNavigate();

  return (
    <div id="modal">
      <div className="nav">
        <div className="container d-flex justify-content-between align-items-center ">
          <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
          <p className="header_name">Менин маалыматтарым</p>
          <TbFileSettings className="fi" />
        </div>
      </div>
      <div className="container">
        <form>
          <div className="input_form_block top">
            <div className="input_box">
              <label>Авторизация телефону</label>
              <input
                id="phone"
                className="input_form new_add_input"
                placeholder="996"
              />
            </div>
            <div className="input_box">
              <label>Фaмилиясы</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>Аты</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>Атасынын Аты</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box ">
              <label>Туулган куну</label>
              <input className="input_form new_add_input" type="date" />
            </div>
            <div className="input_box ">
              <label>Жынысы</label>
              <input className="input_form new_add_input" type="text" />
            </div>
            <div className="input_box">
              <label>Тили</label>
              <select
                className="input_select "
                onChange={(e) => setInfo({ ...info, family: e.target.value })}
                value={info.family}
              >
                {data.map((el, id) => (
                  <option key={id} value={el.name}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="input_box">
              <label>Уй-булолук абалы</label>
              <select
                className="input_select "
                onChange={(e) => setInfo({ ...info, family: e.target.value })}
                value={info.family}
              >
                {data.map((el, id) => (
                  <option key={id} value={el.name}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="input_box">
              <label>Социалдык абалы</label>
              <select
                className="input_select "
                onChange={(e) => setInfo({ ...info, family: e.target.value })}
                value={info.family}
              >
                {data.map((el, id) => (
                  <option key={id} value={el.name}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="input_box">
              <label>Жашаган шаары</label>
              <select
                className="input_select "
                onChange={(e) => setInfo({ ...info, family: e.target.value })}
                value={info.family}
              >
                {data.map((el, id) => (
                  <option key={id} value={el.name}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="toggle_block toogle_block_inform">
            <p>Уй-жаныбарларынын болушу</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider_toggle round"></span>
            </label>
          </div>
          <div className="toggle_block toogle_block_inform bottom_tom">
            <p>Унаанын болушу</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider_toggle round"></span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyInformation;

//    <div className="input_box">
// <div
// onClick={() =>
//   setToursTwo(!toursTwo) ||
//   setToursThree(false) ||
//   setToursFour(false) ||
//   setToursFife(false) ||
//   setTours(false) ||
//   setChekbox(false)
// }
// className="select_input"
// ></div>
// <input
// value={dataTours.transport}
// disabled={true}
// onChange={(e) =>
//   setDataTours({ ...dataTours, transport: e.target.value })
// }
// type="text"
// placeholder={t("key17")}
// className="category_box"
// />
// <RiArrowDownSLine
// onClick={() => setToursTwo(!toursTwo)}
// className="icon"
// size={25}
// />
// {toursTwo && (
// <Select>
//   {list.transport &&
//     list.transport &&
//     list.transport.map((el) => (
//       <div
//         key={el.id}
//         onClick={() => {
//           setDataTours({
//             ...dataTours,
//             transport: el.name,
//           });
//           setToursTwo(false);
//         }}
//         className="select_box"
//       >
//         {el.name}
//       </div>
//     ))}
// </Select>
// )}
// </div>
