import AuthLayout from "../features/auth/components/AuthLayout";
import RegisterForm from "../features/auth/components/RegisterForm";

function RegisterPage() {
  return (
    <AuthLayout
      title="Job Tracker"
      illustrationTitle="Begin Your Job Search Journey"
      illustrationDescription="Create an account to start tracking your applications"
    >
      <RegisterForm />
    </AuthLayout>
  );
}

export default RegisterPage;
