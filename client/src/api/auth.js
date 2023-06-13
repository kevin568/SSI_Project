import axios from "axios";
const baseUrl = "http://localhost:8080/";

// User
export const login = async ({ email, password }) => {
  try {
    const res = await axios.post(`${baseUrl}api/v1/users/login`, {
      email,
      password,
    });
    // Save token to localStorage
    if (res.data && res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res;
  } catch (err) {
    console.log(err.response);
    alert("登入失敗");
  }
};

export const register = async ({ name, email, password }) => {
  try {
    const res = await axios.post(`${baseUrl}api/v1/users/register`, {
      name,
      email,
      password,
    });
    return res;
  } catch (err) {
    console.log(err.response);
    alert("註冊失敗");
  }
};
