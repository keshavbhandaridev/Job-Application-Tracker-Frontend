import api from "../../../services/ApiService";
import type { IRegisterUser } from "../hooks/useAuth.tsx";

export interface ILoginUser {
  email: string;
  password: string;
}

class AuthService {
  registerUser = async (userData: IRegisterUser) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  };

  loginUser = async (userData: ILoginUser) => {
    const response = await api.post("/auth/login", userData);
    return response.data;
  };
}

export default new AuthService();
