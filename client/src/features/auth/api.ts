import Credentials from "./types/Credentials";
import RegisterData from "./types/RegisterData";
import User from "./types/User";

export const registerFetch = async (obj: RegisterData): Promise<User> => {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(obj),
  });

  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export async function loginFetch(credentials: Credentials): Promise<User> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }

  return res.json();
}

export const getUser = async (): Promise<
  | {
      isLoggedIn: true;
      user: User;
    }
  | {
      isLoggedIn: false;
    }
> => {
  const res = await fetch("/api/auth/verification", { credentials: "include" });

  if (!res.ok) {
    const { error } = await res.json();
    throw error;
  }
  return res.json();
};

export const logout = async (): Promise<void> => {
  await fetch("/api/auth/logout", {
    method: "POST",
  });
};

export async function apiUpdatSportsmetFeth(obj: User): Promise<User> {
  const res = await fetch(`/api/updata/${obj.id!}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(obj),
  });
  return res.json();
}
