import React from "react";

type StatisticsData = {
  totalApplications: number;
  interviewsScheduled: number;
  pendingResponses: number;
  offers: number;
  rejected: number;
};

interface StatisticsTilesProps {
  data: StatisticsData;
}

const StatisticsTiles: React.FC<StatisticsTilesProps> = ({
  data = {
    totalApplications: 15,
    interviewsScheduled: 3,
    pendingResponses: 8,
    offers: 1,
    rejected: 3,
  },
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {/* Total Applications */}
      <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-gray-800">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-700">Total Applications</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <p className="text-2xl font-bold mt-2 text-gray-800">{data.totalApplications}</p>
      </div>

      {/* Interviews Scheduled */}
      <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-green-600">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-700">Interviews Scheduled</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-2xl font-bold mt-2 text-gray-800">{data.interviewsScheduled}</p>
      </div>

      {/* Pending Responses */}
      <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-amber-500">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-700">Pending Responses</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-2xl font-bold mt-2 text-gray-800">{data.pendingResponses}</p>
      </div>

      {/* Offers */}
      <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-600">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-700">Offers</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <p className="text-2xl font-bold mt-2 text-gray-800">{data.offers}</p>
      </div>

      {/* Rejected */}
      <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-rose-600">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-700">Rejected</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="text-2xl font-bold mt-2 text-gray-800">{data.rejected}</p>
      </div>
    </div>
  );
};

export default StatisticsTiles;
