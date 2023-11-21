import React, { useEffect, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbFileSettings } from "react-icons/tb";
import IMask from "imask";
import axios from "axios";
import { url } from "../Api";

const dataSelect = {
  language: [
    {
      leng: "Кыргызча",
    },
    {
      leng: "Русский",
    },
  ],
  gender: [
    {
      gen: "Мужской",
    },
    {
      gen: "Женский",
    },
  ],
  married: [
    {
      family: "Холост",
    },
    {
      family: "Замужем",
    },
  ],
  social_status: [
    {
      status: "Домохозяйка",
    },
    {
      status: "Студент",
    },
    {
      status: "Пенсионер",
    },
    {
      status: "Сотрудник частной компании",
    },
    {
      status: "Безработный",
    },
    {
      status: "Частный предприниматель",
    },
    {
      status: "Другое",
    },
  ],
  city_accommodation: [
    {
      city: "Бишкек",
    },
    {
      city: "Кант",
    },
    {
      city: "Токмок",
    },
    {
      city: "Чолпон-ата",
    },
    {
      city: "Кара-Балта",
    },
    {
      city: "Сокулук",
    },
    {
      city: "Бостери",
    },
    {
      city: "Балыкчы",
    },
    {
      city: "Белеводское",
    },
    {
      city: "Ощ",
    },
    {
      city: "Каракол",
    },
    {
      city: "Базар-Коргон",
    },
    {
      city: "Другой город",
    },
  ],
};

const MyInformation = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [local, setLocal] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      setLocal(token);
    }
  }, []);

  const headers = {
    Authorization: `Token ${local}`,
  };

  const [info, setInfo] = useState({
    phone: "",
    first_name: "",
    last_name: "",
    birthday: "2023-11-20",
    gender: "",
    language: "Русский",
    married: "",
    status: "",
    city: "",
    children: true,
    animal: true,
    car: true,
  });

  useEffect(() => {
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      const masked = IMask(phoneInput, {
        mask: "+996 (000) 00-00-00",
      });
    }
  });

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      axios
        .get(url + "/auth/user-info")
        .then((response) => {
          setList(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);

  const createPerson = async (e) => {
    e.preventDefault();
    if (local) {
      setLoading(true);

      const post = {
        phone: info.phone,
        first_name: info.first_name,
        birthday: info.birthday,
        gender: info.gender,
        language: info.language,
        married: info.married,
        status: info.status,
        city: info.city,
      };
      try {
        const newTourResponse = await axios.post(
          url + "/auth/update-user-detail",
          post,
          {
            headers,
          }
        );
        setLoading(false);
        if (newTourResponse.data.response === true) {
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          alert(error.response.data.errors);
        } else {
          alert("Произошла ошибка.");
        }
        setLoading(false);
      }
    }
  };

  return (
    <div className="my_information">
      <div id="modal">
        <div className="nav">
          <div className="container d-flex justify-content-between align-items-center ">
            <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
            <p className="header_name">Менин маалыматтарым</p>
            <TbFileSettings onClick={createPerson} className="fi" />
          </div>
        </div>
        <div className="container">
          <form onSubmit={createPerson}>
            <>
              <div className="input_form_block top">
                <div className="input_box">
                  <label>Телефон авторизации</label>
                  <input
                    id="phone"
                    className="input_form new_add_input"
                    placeholder="996"
                    value={info.phone && list.phone}
                    onChange={(e) =>
                      setInfo({ ...info, phone: e.target.value })
                    }
                  />
                </div>
                <div className="input_box">
                  <label>Фaмилия</label>
                  <input
                    className="input_form new_add_input"
                    type="text"
                    value={info.last_name}  
                    onChange={(e) =>
                      setInfo({ ...info, last_name: e.target.value })
                    }
                  />
                </div>
                <div className="input_box">
                  <label>Имя</label>
                  <input
                    className="input_form new_add_input"
                    type="text"
                    value={info.first_name}
                    onChange={(e) =>
                      setInfo({ ...info, first_name: e.target.value })
                    }
                  />
                </div>
                <div className="input_box ">
                  <label>Дата рождения</label>
                  <input
                    className="input_form new_add_input"
                    type="date"
                    value={info.birthday}
                    onChange={(e) =>
                      setInfo({ ...info, birthday: e.target.value })
                    }
                  />
                </div>
                <div className="input_box">
                  <label>Пол</label>
                  <select
                    className="input_select"
                    onChange={(e) =>
                      setInfo({ ...info, gender: e.target.value })
                    }
                    value={info.gender}
                  >
                    {dataSelect.gender.map((el, id) => (
                      <option key={id} value={el.gen}>
                        {el.gen}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input_box">
                  <label>Родной язык</label>
                  <select
                    className="input_select"
                    onChange={(e) =>
                      setInfo({ ...info, language: e.target.value })
                    }
                    value={info.language}
                  >
                    {dataSelect.language.map((el, id) => (
                      <option key={id} value={el.name}>
                        {el.leng}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input_box">
                  <label>Семейной положения</label>
                  <select
                    className="input_select"
                    onChange={(e) =>
                      setInfo({ ...info, married: e.target.value })
                    }
                    value={info.married}
                  >
                    {dataSelect.married.map((el) => (
                      <option value={el.family}>{el.family}</option>
                    ))}
                  </select>
                </div>
                <div className="input_box">
                  <label>Социальный статус</label>
                  <select
                    className="input_select"
                    onChange={(e) =>
                      setInfo({ ...info, status: e.target.value })
                    }
                    value={info.status}
                  >
                    {dataSelect.social_status.map((el) => (
                      <option value={el.status}>{el.status}</option>
                    ))}
                  </select>
                </div>
                <div className="input_box">
                  <label> Город проживания </label>
                  <select
                    className="input_select"
                    onChange={(e) => setInfo({ ...info, city: e.target.value })}
                    value={info.city}
                  >
                    {dataSelect.city_accommodation.map((el) => (
                      <option value={el.city}>{el.city}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="toggle_block toogle_block_inform">
                <p>Наличие домашних животных</p>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider_toggle round"></span>
                </label>
              </div>
              <div className="toggle_block toogle_block_inform bottom_tom">
                <p>Наличие автомобиля</p>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider_toggle round"></span>
                </label>
              </div>
            </>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyInformation;
