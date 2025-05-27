import { useMutation } from "@tanstack/react-query";
import authService from "../services/authService";

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

const useAuth = () => {
  const { mutate: registerUser, isPending: isSignUpPending } = useMutation({
    mutationFn: async (newUser: IRegisterUser) => {
      const response = await authService.registerUser(newUser);
      return response.data;
    },
    onSuccess: (data) => {
      // Set the token in global store or localStorage
      console.log("User registered successfully:", data);
    },
  });

  return {
    registerUser,
    isSignUpPending,
  };
};

export default useAuth;
