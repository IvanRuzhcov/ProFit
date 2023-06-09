import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthState from './types/AuthState';
import RegisterData from './types/RegisterData';
import * as api from './api';
import Credentials from './types/Credentials';

const initialState: AuthState = {
  authChecked: false,
  user: undefined,
  loginFormError: undefined,
  registerFormError: undefined,
};

// export const verification = createAsyncThunk('auth/verification', () =>
//   api.getUser()
// );

export const getUser = createAsyncThunk('auth/user', () => api.user());

export const register = createAsyncThunk(
  'auth/registerFetch',
  async (data: RegisterData) => {
    if (data.password !== data.passwordRepeat) {
      throw new Error('Пароли не совпадают');
    }
    if (!data.login.trim() || !data.email.trim() || !data.password.trim()) {
      throw new Error('Не все поля заполнены');
    }
    return api.registerFetch(data);
  }
);

export const loginJoin = createAsyncThunk(
  'auth/loginFetch',
  async (credentials: Credentials) => {
    if (!credentials.login.trim() || !credentials.password.trim()) {
      throw new Error('Не все поля заполнены');
    }

    return api.loginFetch(credentials);
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
