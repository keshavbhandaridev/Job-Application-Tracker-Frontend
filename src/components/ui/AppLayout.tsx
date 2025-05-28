import { useState, useEffect, useRef } from "react";
import useUserStore from "../../features/auth/store/userStore";
import useAuth from "../../features/auth/hooks/useAuth";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const user = useUserStore((state) => state.user);
  const { logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Application Header */}
      <header className="bg-white shadow-md py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Job Application Tracker</h1>
            <p className="text-gray-600">Track and manage your job applications</p>
          </div>
          <div className="relative" ref={dropdownRef}>
            <div
              className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleProfileClick}
            >
              <span className="text-lg font-semibold">{user?.name?.[0] || "U"}</span>
            </div>
            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg p-3 z-10">
                <div className="border-b border-gray-100 pb-2 mb-2">
                  <p className="text-sm font-medium text-gray-800">{user?.name || "User"}</p>
                  <p className="text-xs text-gray-600">{user?.email}</p>
                </div>
                <button onClick={handleLogout} className="w-full text-left text-sm text-red-600 hover:text-red-800 font-medium py-1">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default AppLayout;
