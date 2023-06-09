import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthState from './types/AuthState';
import RegisterData from './types/RegisterData';
import * as api from './api';

const initialState: AuthState = {
  authChecked: false,
  user: undefined,
  loginFormError: undefined,
  registerFormError: undefined,
};

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
      });
  },
});

export default authSlice.reducer;