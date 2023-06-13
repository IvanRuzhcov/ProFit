import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthState from "./types/AuthState";
import RegisterData from "./types/RegisterData";
import * as api from "./api";
import Credentials from "./types/Credentials";
import User from "./types/User";

const initialState: AuthState = {
  authChecked: false,
  user: undefined,
  loginFormError: undefined,
  registerFormError: undefined,
};

export const verification = createAsyncThunk("auth/verification", () =>
  api.getUser()
);
export const upSportsmen = createAsyncThunk(
  "sportsman/updata",
  (action: User) => api.apiUpdatSportsmetFeth(action)
);

export const register = createAsyncThunk(
  "auth/registerFetch",
  async (data: RegisterData) => {
    if (data.password !== data.passwordRepeat) {
      throw new Error("Пароли не совпадают!");
    }
    if (
      !data.login.trim() ||
      !data.email.trim() ||
      !data.password.trim() ||
      !data.status.trim()
    ) {
      throw new Error("Не все поля заполнены!");
    }
    return api.registerFetch(data);
  }
);

export const loginJoin = createAsyncThunk(
  "auth/loginFetch",
  async (credentials: Credentials) => {
    if (!credentials.login.trim() || !credentials.password.trim()) {
      throw new Error("Не все поля заполнены!");
    }

    return api.loginFetch(credentials);
  }
);

export const logout = createAsyncThunk("auth/logout", api.logout);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLoginFormError: (state) => {
      state.loginFormError = undefined;
    },
    resetRegisterFormError: (state) => {
      state.registerFormError = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.registerFormError = undefined;
      })
      .addCase(register.rejected, (state, action) => {
        state.registerFormError = action.error.message;
      })

      .addCase(loginJoin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loginFormError = undefined;
      })
      .addCase(loginJoin.rejected, (state, action) => {
        state.loginFormError = action.error.message;
      })

      .addCase(verification.fulfilled, (state, action) => {
        state.authChecked = true;
        console.log(action.payload);

        state.user = action.payload.isLoggedIn
          ? action.payload.user
          : undefined;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = undefined;
      })
      .addCase(upSportsmen.fulfilled, (state, action) => {
        // console.log(action.payload.id, state.user[0]);
        console.log(action.payload);
        
        state.user = action.payload;

        // console.log(action.payload);
      });
    // .addCase(upSportsmen.rejected, (state, action) => {
    //   state.error = action.error.message;
    // });
  },
});

export const { resetLoginFormError, resetRegisterFormError } =
  authSlice.actions;

export default authSlice.reducer;
