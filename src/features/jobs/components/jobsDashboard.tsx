const JobsDashboard = () => {
  return (
    <>
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
    </>
  );
};

export default JobsDashboard;
