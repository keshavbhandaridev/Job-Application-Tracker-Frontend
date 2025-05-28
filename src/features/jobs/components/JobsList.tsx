import React, { useState } from "react";
import { formatDate, getTimeSinceApplied } from "../../../utils/dateUtils";

interface Location {
  country?: string;
  state?: string;
  city?: string;
}

interface Job {
  _id: string;
  company: string;
  role: string;
  status: string;
  isRemote: boolean;
  location?: Location;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface JobsListProps {
  jobs: Job[];
  isLoading?: boolean;
}

const JobsList: React.FC<JobsListProps> = ({ jobs }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Status badge color mapping
  const statusColors: Record<string, string> = {
    Applied: "bg-blue-100 text-blue-800 border border-blue-200",
    Interview: "bg-violet-100 text-violet-800 border border-violet-200",
    Offer: "bg-emerald-100 text-emerald-800 border border-emerald-200",
    Rejected: "bg-rose-100 text-rose-800 border border-rose-200",
    "In Progress": "bg-amber-100 text-amber-800 border border-amber-200",
  };

  // Action menu for a job row
  const renderActionMenu = () => (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="bg-white rounded-full p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="shadow-md rounded-lg border border-gray-200 bg-white overflow-hidden flex flex-col">
      {/* Table toolbar */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sticky top-0 z-30">
        <div className="flex items-center">
          <h2 className="text-lg font-medium text-gray-800">Job Applications</h2>
        </div>
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <div className="relative rounded-md shadow-sm flex-grow md:flex-grow-0 w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filter
          </button>
          <button className="flex items-center bg-blue-600 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Job
          </button>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-auto max-h-[calc(80vh-200px)]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer select-none"
              >
                <div className="flex items-center">Company & Role</div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer select-none"
              >
                <div className="flex items-center">Status</div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer select-none"
              >
                <div className="flex items-center">Location</div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer select-none"
              >
                <div className="flex items-center">Applied</div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
              <th scope="col" className="px-6 py-3 w-10">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job._id} className={`hover:bg-gray-50`}>
                {/* Company & Role */}
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-base font-medium text-gray-700">{job.company.charAt(0).toUpperCase()}</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{job.company}</div>
                      <div className="text-sm text-gray-700">{job.role}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      statusColors[job.status] || "bg-gray-100 text-gray-800 border border-gray-200"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {job.isRemote ? (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Remote
                    </span>
                  ) : job.location ? (
                    <div className="text-sm text-gray-900">
                      <div className="font-medium">{job.location.city}</div>
                      <div className="text-xs text-gray-500">
                        {job.location.state}, {job.location.country}
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-500">—</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <div className="font-medium">{formatDate(job.createdAt)}</div>
                  <div className="text-xs text-gray-500">{getTimeSinceApplied(job.createdAt)}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <div className="max-w-[400px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {job.notes || <span className="text-gray-400 italic">No notes</span>}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">{renderActionMenu()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsList;
