import User from './User';

type AuthState = {
  authChecked: boolean;
  user?: User;
  loginFormError?: string;
  registerFormError?: string;
};

export default AuthState;
