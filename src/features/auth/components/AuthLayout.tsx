import type { ReactNode } from "react";
import { JobIllustration } from "../../../assets/job-illustration";
import { JobTrackerLogo } from "../../../assets/job-tracker-logo";

type AuthLayoutProps = {
  title: string;
  illustrationTitle: string;
  illustrationDescription: string;
  children: ReactNode;
};

function AuthLayout({ title, illustrationTitle, illustrationDescription, children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-white flex-col items-center justify-center p-12">
        <div className="max-w-md">
          <JobIllustration />
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold text-gray-800">{illustrationTitle}</h2>
            <p className="text-gray-600 mt-2">{illustrationDescription}</p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-10">
            <div className="w-24 h-24 mx-auto mb-4">
              <JobTrackerLogo />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
