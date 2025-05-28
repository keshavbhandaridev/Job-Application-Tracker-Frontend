// filepath: /home/keshav/Playground/job-tracker-application-frontend/src/features/auth/components/RegisterForm.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { validateConfirmPassword, validatePassword } from "../utils/registrationFormValidation";
import useAuth from "../hooks/useAuth.tsx";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  password?: string;
  confirmPassword?: string;
}

function RegisterForm() {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const { registerUser, isSignUpPending } = useAuth();

  const handleFormValidations = (name: keyof RegisterFormData, value: string) => {
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    if (name === "password" && value) {
      const passwordError = validatePassword(value);
      setFormErrors((prev) => ({ ...prev, [name]: passwordError }));
    }

    if (name === "confirmPassword" && formData.password && value) {
      const confirmPasswordError = validateConfirmPassword(formData.password, value);
      setFormErrors((prev) => ({ ...prev, [name]: confirmPasswordError }));
    }
  };

  const isFormValid = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    errors.password = validatePassword(formData.password);
    errors.confirmPassword = validateConfirmPassword(formData.password, formData.confirmPassword);
    setFormErrors(errors);

    Object.keys(errors).forEach((key) => {
      if (errors[key as keyof FormErrors]) {
        isValid = false;
      }
    });
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    handleFormValidations(name as keyof RegisterFormData, value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            required
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500`}
            placeholder="John Doe"
            disabled={isSignUpPending}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500`}
            placeholder="you@example.com"
            disabled={isSignUpPending}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className={`mt-1 block w-full rounded-md border ${
              formErrors.password ? "border-red-500" : "border-gray-300"
            } px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500`}
            placeholder="••••••••"
            disabled={isSignUpPending}
          />
          {formErrors.password && <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>}
          {!formErrors.password && formData.password && <p className="mt-1 text-sm text-green-600">Password meets requirements</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className={`mt-1 block w-full rounded-md border ${
              formErrors.confirmPassword ? "border-red-500" : "border-gray-300"
            } px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500`}
            placeholder="••••••••"
            disabled={isSignUpPending}
          />
          {formErrors.confirmPassword && <p className="mt-1 text-sm text-red-600">{formErrors.confirmPassword}</p>}
        </div>

        <div className="flex items-center">
          <input
            id="agreeToTerms"
            name="agreeToTerms"
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            disabled={isSignUpPending}
          />
          <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Privacy Policy
            </a>
          </label>
        </div>

        <div>
          <button
            type="submit"
            className={`mt-4 flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isSignUpPending ? "opacity-75 cursor-not-allowed" : ""
            }`}
            disabled={isSignUpPending}
          >
            {isSignUpPending ? "Signing up..." : "Sign up"}
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
          Log in
        </Link>
      </p>
    </>
  );
}

export default RegisterForm;
