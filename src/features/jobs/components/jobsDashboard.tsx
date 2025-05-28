import StatisticsTiles from "./StatisticsTiles";

const JobsDashboard = () => {
  // Mock data - in a real application, this would come from a state or API
  const statisticsData = {
    totalApplications: 15,
    interviewsScheduled: 3,
    pendingResponses: 8,
    offers: 1,
    rejected: 3,
  };

  return (
    <>
      {/* Stats Overview */}
      <StatisticsTiles data={statisticsData} />

      {/* Dummy Content */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Recent Applications</h2>
        <p className="text-gray-500 italic">Your recent job applications will appear here</p>
      </div>
    </>
  );
};

export default JobsDashboard;
