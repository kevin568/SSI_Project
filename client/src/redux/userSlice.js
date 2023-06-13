import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register, login } from "../api/auth";

const loginAsync = createAsyncThunk(
  "account/login",
  async ({ email, password }) => {
    try {
      const { data } = await login({ email, password });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const registerAsync = createAsyncThunk(
  "account/register",
  async ({ name, email, password }) => {
    try {
      const { data } = await register({ name, email, password });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  login: {
    hasLogin: Boolean(localStorage.getItem("token")),
  },
  status: "idle",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      // Remove the token from local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.user = {};
      state.login.hasLogin = false;
    },
    loadUserFromLocalStorage: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.login.hasLogin = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.login.hasLogin = true;
        state.user = { ...action.payload.data.user };
        localStorage.setItem("user", JSON.stringify(action.payload.data.user));
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "error";
        state.login.hasLogin = false;
      })
      .addCase(registerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.login.hasLogin = true;
        state.user = { ...action.payload.data.user };
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.status = "error";
        state.login.hasLogin = false;
      });
  },
});

export { loginAsync, registerAsync };

export const { setUserInfo, signOut, loadUserFromLocalStorage } =
  accountSlice.actions;

export default accountSlice.reducer;
