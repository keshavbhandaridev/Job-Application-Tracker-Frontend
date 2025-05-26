import AuthLayout from "../features/auth/components/AuthLayout";
import LoginForm from "../features/auth/components/LoginForm";

function LoginPage() {
  return (
    <AuthLayout
      title="Job Tracker"
      illustrationTitle="Track Your Job Applications"
      illustrationDescription="Stay organized and never miss an opportunity"
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default LoginPage;
