import { Navigate } from "react-router-dom";
import useUserStore from "../../features/auth/store/userStore";
import AppLayout from "./AppLayout";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <AppLayout>{children}</AppLayout>;
};

export default ProtectedRoute;
