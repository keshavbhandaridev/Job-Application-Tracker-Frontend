import api from "../../../services/ApiService";
import type { IRegisterUser } from "../hooks/useAuth.tsx";

class AuthService {
  registerUser = async (userData: IRegisterUser) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  };
}

export default new AuthService();
