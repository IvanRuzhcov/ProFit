import Credentials from './types/Credentials';
import { Message } from './types/Message';
import RegisterData from './types/RegisterData';
import User from './types/User';

export const registerFetch = async (obj: RegisterData): Promise<User> => {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(obj),
  });

  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }
  return res.json();
};

export async function loginFetch(credentials: Credentials): Promise<User> {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }

  return res.json();
}

// export const getUser = async (): Promise<User> => {
//   const res = await fetch('/api/auth/verification', { credentials: 'include' });

//   if (!res.ok) {
//     const { error } = await res.json();
//     throw error;
//   }
//   return res.json();
// };

export async function user(): Promise<
  | {
      isLoggedIn: true;
      user: User;
    }
  | {
      isLoggedIn: false;
    }
> {
  return (await fetch('/api/auth/user')).json();
}
