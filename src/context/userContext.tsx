import { createContext, ReactNode, useCallback, useEffect } from "react";
import { api } from "../services/api";

type AuthProviderProps = {
  children: ReactNode;
};

type Login = {
  email: string;
  password: string;
};
export const AuthContext = createContext({});

export default function AuthProvider({ children }: AuthProviderProps) {
  const addTokenApi = useCallback((token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token") as string;
    if (token) addTokenApi(token);
  }, [addTokenApi]);

  const signIn = async ({ email, password }: Login) => {
    const response = await api.post("auth/signin", { email, password });
    localStorage.setItem("token", response.data.token);
    addTokenApi(response.data.token);
    return response.data;
  };
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
