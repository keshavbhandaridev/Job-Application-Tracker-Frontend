import useUserStore from "../../auth/store/userStore";

const JobsDashboard = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Jobs Dashboard</h1>
              <p className="text-gray-600">Track and manage your job applications</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-4">
              <p className="text-sm font-medium text-blue-800">
                Welcome, <span className="font-bold">{user?.name || "User"}</span>!
              </p>
              <p className="text-xs text-blue-600">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-800">Total Applications</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">15</p>
          </div>
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-800">Interviews Scheduled</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">3</p>
          </div>
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-800">Pending Responses</h2>
            <p className="text-3xl font-bold text-amber-600 mt-2">8</p>
          </div>
        </div>

        {/* Dummy Content */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Recent Applications</h2>
          <p className="text-gray-500 italic">Your recent job applications will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default JobsDashboard;
