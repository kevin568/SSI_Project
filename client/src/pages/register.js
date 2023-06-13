import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAsync } from "../redux/userSlice";
import { Navbar } from "../component/navbar";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  const registerStatus = useSelector((state) => state.account.status);
  const user = useSelector((state) => state.account.user);
  const dispatch = useDispatch();

  const handleRegister = async () => {
    if (password !== passwordConfirm) {
      alert("密碼不一致，請再確認一次");
      return;
    }
    dispatch(registerAsync({ name, email, password }));
  };

  useEffect(() => {
    if (registerStatus === "idle" && user.name) {
      alert("註冊成功！");
      navigate("/");
    }
  });

  return (
    <div className="container">
      <Navbar />
      <div className="card shadow-sm p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h2 className="card-title mb-4">註冊</h2>
          <form>
            <div className="form-group">
              <label>姓名</label>
              <input
                type="text"
                className="form-control"
                placeholder="輸入名字"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="輸入email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>密碼</label>
              <input
                type="password"
                className="form-control"
                placeholder="輸入密碼"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>確認密碼</label>
              <input
                type="password"
                className="form-control"
                placeholder="確認密碼"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-dark mt-3"
              onClick={handleRegister}
            >
              註冊
            </button>
            <div className="mt-3">
              我已經有帳號
              <span className="font-weight-bold">
                <Link to={"/login"}>點選登入</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Register };
