import React, { useEffect, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { TbFileSettings } from "react-icons/tb";
import IMask from "imask";
import Select from "../UI/Loading/Select/Select";

const MyInformation = () => {
  useEffect(() => {
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      const masked = IMask(phoneInput, {
        mask: "+996 (000) 00-00-00",
      });
    }
  });

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chekbox, setChekbox] = useState(false);
  const [select, setSelect] = useState(false);
  const [selectOne, setSelectOne] = useState(false);
  const [selectTwo, setSelectTwo] = useState(false);
  const [selectThree, setSelectThree] = useState(false);
  const [selectFour, setSelectFour] = useState(false);
  const [selectFife, setSelectFife] = useState(false);
  const toggleSelect = () => {
    setSelect(!select);
  };
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
        <form action="">
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
              <div
                className="select_input"
                onClick={() =>
                  setSelect(!select)
                }
              ></div>
              <label>Тили</label>
              <div className="toggle_block infor_block">
                <input style={{}} className="input_option" type="button" />
                <MdKeyboardArrowDown 
                onClick={toggleSelect}
                  className="right_icons"
                  style={{ cursor: "pointer" }}
                  size={30}
                />
                {select && (
                  <Select>
                    <div>Ihsan</div>
                  </Select>
                )}
              </div>
            </div>
            <div className="input_box">
              <div
                className="select_input"
                onClick={() =>
                  setSelect(false) ||
                  setSelectOne(!selectOne) ||
                  setSelectTwo(false) ||
                  setSelectThree(false) ||
                  setSelectFour(false)
                }
              ></div>
              <label>Уй-булолук абалы</label>
              <div className="toggle_block infor_block">
                <input className="input_option" type="button" />
                <MdKeyboardArrowDown
                  className="right_icons"
                  style={{ cursor: "pointer" }}
                  size={30}
                />
                {selectOne && (
                  <Select>
                    <div>Dida</div>
                  </Select>
                )}
              </div>
            </div>
            <div className="input_box">
              <div
                className="select_input"
                onClick={() =>
                  setSelect(false) ||
                  setSelectOne(false) ||
                  setSelectTwo(!selectTwo) ||
                  setSelectThree(false) ||
                  setSelectFour(false)
                }
              ></div>
              <label>Социалдык абалы</label>
              <div className="toggle_block infor_block">
                <input className="input_option" type="button" />
                <MdKeyboardArrowDown
                  className="right_icons"
                  style={{ cursor: "pointer" }}
                  size={30}
                />
                {selectTwo && (
                  <div className="input_modal_option">
                    <Select>
                      <h1>hhhh</h1>
                      <h1>hhhh</h1>
                      <h1>hhhh</h1>
                    </Select>
                  </div>
                )}
              </div>
            </div>
            <div className="input_box">
              <div
                className="select_input"
                onClick={() =>
                  setSelect(false) ||
                  setSelectOne(false) ||
                  setSelectTwo(false) ||
                  setSelectThree(!selectThree) ||
                  setSelectFour(false)
                }
              ></div>
              <label>Жашаган шаары</label>
              <div className="toggle_block infor_block">
                <input className="input_option" type="button" />
                <MdKeyboardArrowDown
                  className="right_icons"
                  style={{ cursor: "pointer" }}
                  size={30}
                />
              </div>
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
