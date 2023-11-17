import React from "react";

const navigate = useNavigate();
const [code, setCode] = useState("");
const dispatch = useDispatch();
const [loading, setLoading] = useState(false);

const handleSubmit = async (event) => {
  event.preventDefault();
  const phone = localStorage.getItem("phone");
  try {
    const response = await axios.post(url + "/auth/verify-phone", {
      phone,
      code,
    });
    dispatch(registerSuccess(response.data));
    if (response.data.response === true) {
      navigate("/");
      Alert("Верификация прошло успешно", "success");
    }
    if (response.data.response === false) {
      Alert(response.data.message, "error");
    }
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

const ActivationCode = () => {
  return (
    <div id="modal">
      <div className="nav">
        <div className="container d-flex justify-content-between align-items-center ">
          <HiArrowLongLeft className="fi" onClick={() => navigate(-1)} />
          <img className="images" src={bekbekei} alt="Бекбекей" />
          <LiaQuestionCircleSolid
            className="fi"
            onClick={() => navigate("/to-help-page")}
          />
        </div>
      </div>
      <div className="container">
        <div className="activation">
          <p>Введите код, который мы вам отправили на сообщение</p>
          <form onSubmit={handleSubmit}>
            <input
              style={{ textAlign: "center" }}
              className="input_form"
              value={code}
              type="number"
              placeholder="Введите код"
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              disabled={loading}
              style={{ marginTop: 20 }}
              className="registr_btn"
              type="submit"
            >
              {loading ? <Loading /> : "Подтвердить"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActivationCode;
