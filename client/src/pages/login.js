import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../redux/userSlice";
import { Navbar } from "../component/navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginStatus = useSelector((state) => state.account.status);
  const user = useSelector((state) => state.account.user);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(loginAsync({ email, password }));
  };

  useEffect(() => {
    if (loginStatus === "idle" && user.name) {
      alert("登入成功！");
      navigate("/");
    }
  });

  return (
    <div className="container">
      <Navbar />
      <div className="card shadow-sm p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h2 className="card-title mb-4">登入</h2>
          <form>
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
            <button
              type="button"
              className="btn btn-dark mt-3"
              onClick={handleLogin}
            >
              登入
            </button>
            <div className="mt-3">
              還沒有帳號嗎？
              <span className="font-weight-bold">
                <Link to={"/register"}>馬上註冊</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Login };
