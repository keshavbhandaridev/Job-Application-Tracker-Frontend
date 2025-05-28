import { useMutation } from "@tanstack/react-query";
import authService from "../services/authService";
import type { ILoginUser } from "../services/authService";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
      toast.success("Registration successful! Welcome aboard.");
    },
    onError: (error: Error) => {
      toast.error(error?.message || "Registration failed. Please try again.");
    },
  });

  const { mutate: loginUser, isPending: isLoginPending } = useMutation({
    mutationFn: async (userData: ILoginUser) => {
      return await authService.loginUser(userData);
    },
    onSuccess: (data) => {
      handleAuthSuccess(data);
      toast.success(`Welcome back, ${data.user.name || "User"}!`);
    },
    onError: (error: Error) => {
      toast.error(error?.message || "Login failed. Please check your credentials.");
    },
  });

  const logout = () => {
    localStorage.removeItem("authToken");
    clearUser();
    navigate("/");
    toast.success("You have been logged out successfully.");
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
