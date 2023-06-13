import { FileTrainer } from '../../Trainer/types/FileTrainer';
import User from './User';

type AuthState = {
  authChecked: boolean;
  user?: User;
  loginFormError?: string;
  registerFormError?: string;
  files: FileTrainer[],
  fileError: string | undefined
};

export default AuthState;
