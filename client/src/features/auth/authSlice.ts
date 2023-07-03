import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthState from './types/AuthState';
import RegisterData from './types/RegisterData';
import * as api from './api';
import Credentials from './types/Credentials';
import * as trainerApi from '../Trainer/api';
import * as sportsmanApi from '../SportsmenPage/api';
import User from './types/User';
import { FileTrainerId } from '../Trainer/types/FileTrainer';

// здесь не только сам юзер, но и его файлы, протипизировано в стейте тоже
const initialState: AuthState = {
  authChecked: false,
  user: undefined,
  loginFormError: undefined,
  registerFormError: undefined,
  files: [],
  fileError: '',
};

export const verification = createAsyncThunk('auth/verification', () =>
  api.getUser()
);

export const upSportsmen = createAsyncThunk(
  'sportsman/updata',
  (action: User) => api.apiUpdatSportsmetFeth(action)
);

// export const upTrainer = createAsyncThunk(
//   "sportsman/updatatrainer",
//   (action: User) => api.apiUpdatTrainerFeth(action)
// );

export const register = createAsyncThunk(
  'auth/registerFetch',
  async (data: RegisterData) => {
    if (data.password !== data.passwordRepeat) {
      throw new Error('Пароли не совпадают!');
    }
    if (
      !data.login.trim() ||
      !data.email.trim() ||
      !data.password.trim() ||
      !data.status.trim()
    ) {
      throw new Error('Не все поля заполнены!');
    }
    return api.registerFetch(data);
  }
);

export const loginJoin = createAsyncThunk(
  'auth/loginFetch',
  async (credentials: Credentials) => {
    if (!credentials.login.trim() || !credentials.password.trim()) {
      throw new Error('Не все поля заполнены!');
    }

    return api.loginFetch(credentials);
  }
);

export const logout = createAsyncThunk('auth/logout', api.logout);

export const uploadFileTrainer = createAsyncThunk(
  'trainer/uploadFile',
  (obj: FormData) => trainerApi.addFileTrainerFetch(obj)
);

export const uploadUrlTrainer = createAsyncThunk(
  'trainer/uploadUrl',
  (obj: FormData) => trainerApi.addUrlTrainerFetch(obj)
);

export const changeAvatar = createAsyncThunk(
  'sportsman/changePicture',
  (obj: FormData) => sportsmanApi.changeAvatarSportsmanFetch(obj)
);

export const deletePost = createAsyncThunk(
  'trainer/deletepost',
  (postId: FileTrainerId) => trainerApi.deletePostFetch(postId)
);

const authSlice = createSlice({
  name: 'auth',
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

        state.user = action.payload.isLoggedIn
          ? action.payload.user
          : undefined;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = undefined;
      })
      .addCase(uploadFileTrainer.fulfilled, (state, action) => {
        if (state.user && state.user.Files) {
          state.user = {
            ...state.user,
            Files: [action.payload, ...state.user.Files ],
          };
        }
        state.fileError = '';
      })
      .addCase(uploadFileTrainer.rejected, (state, action) => {
        state.fileError = action.error.message;
      })
      .addCase(uploadUrlTrainer.fulfilled, (state, action) => {
        state.files = [...state.files, action.payload];
      })
      .addCase(uploadUrlTrainer.rejected, (state, action) => {
        state.fileError = action.error.message;
      })

      .addCase(deletePost.fulfilled, (state, action) => {
       
        if (state.user && state.user.Files) {
          state.user = {
            ...state.user,
            Files: state.user.Files.filter((el) => el.id !== action.payload),
          };
        }
        state.fileError = '';
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.fileError = action.error.message;
      })

      .addCase(upSportsmen.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(changeAvatar.fulfilled, (state, action) => {
        if (state.user && state.user?.profilePicture) {
          state.user.profilePicture = action.payload.profilePicture;
        }
      });
  },
});

export const { resetLoginFormError, resetRegisterFormError } =
  authSlice.actions;

export default authSlice.reducer;
