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
