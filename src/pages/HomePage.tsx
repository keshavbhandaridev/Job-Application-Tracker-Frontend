import { Link } from "react-router-dom";
import { JobTrackerLogo } from "../assets/job-tracker-logo";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-2">
                <JobTrackerLogo />
              </div>
              <span className="font-bold text-xl text-gray-800">Job Tracker</span>
            </div>
            <div className="flex items-center">
              <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                Log in
              </Link>
              <Link to="/register" className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">Track Your Job Applications</h1>
          <p className="text-xl text-gray-600 mb-10">Keep all your job applications organized in one place and never miss an opportunity</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/register" className="px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Get started
            </Link>
            <a href="#features" className="px-8 py-3 text-base font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
