import { useMutation } from "@tanstack/react-query";
import authService from "../services/authService";
import type { ILoginUser } from "../services/authService";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

interface AuthSuccessData {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

const useAuth = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  // Helper function to handle authentication success
  const handleAuthSuccess = (data: AuthSuccessData) => {
    localStorage.setItem("authToken", data.token);
    setUser({
      name: data.user.name,
      email: data.user.email,
    });
    navigate("/dashboard");
  };

  const { mutate: registerUser, isPending: isSignUpPending } = useMutation({
    mutationFn: async (newUser: IRegisterUser) => {
      return await authService.registerUser(newUser);
    },
    onSuccess: (data) => {
      handleAuthSuccess(data);
    },
  });

  const { mutate: loginUser, isPending: isLoginPending } = useMutation({
    mutationFn: async (userData: ILoginUser) => {
      return await authService.loginUser(userData);
    },
    onSuccess: (data) => {
      handleAuthSuccess(data);
    },
  });

  const logout = () => {
    localStorage.removeItem("authToken");
    clearUser();
    navigate("/");
  };

  return {
    registerUser,
    isSignUpPending,
    loginUser,
    isLoginPending,
    logout,
  };
};

export default useAuth;
