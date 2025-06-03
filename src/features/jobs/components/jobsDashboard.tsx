import { useState } from "react";
import StatisticsTiles from "./StatisticsTiles";
import JobsList from "./JobsList";
import AddJobModal from "./AddJobModal";
import toast from "react-hot-toast";

interface JobFormData {
  company: string;
  role: string;
  status: string;
  isRemote: boolean;
  country: string;
  state: string;
  city: string;
  notes: string;
}

const JobsDashboard = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddJob = (formData: JobFormData) => {
    // In a real application, this would be an API call
    console.log("New job data:", formData);
    toast.success("Job added successfully!");
    handleCloseModal();
  };

  // Mock data - in a real application, this would come from a state or API
  const statisticsData = {
    totalApplications: 16,
    interviewsScheduled: 4,
    pendingResponses: 8,
    offers: 2,
    rejected: 2,
  };

  // Sample job data
  const jobsData = [
    {
      location: {
        country: "India",
        state: "Rajasthan",
        city: "ABCD",
      },
      _id: "6832cfbe53f7f6efbcd01dba",
      user: "68305fc2cdcb464507f36dcf",
      company: "Infosys",
      role: "Data Engineer",
      isRemote: false,
      status: "Interview",
      notes: "Had a great first round. Waiting for next steps.",
      createdAt: "2025-05-25T08:07:26.139Z",
      updatedAt: "2025-05-25T09:31:11.324Z",
      __v: 0,
    },
    {
      location: {
        country: "India",
        state: "Rajasthan",
        city: "ABCD",
      },
      _id: "6832e26de9d9e52745865ea8",
      user: "68305fc2cdcb464507f36dcf",
      company: "Microsoft",
      role: "Backend Developer",
      isRemote: false,
      status: "Applied",
      notes: "Applied through referral. Expecting to hear back in two weeks.",
      createdAt: "2025-05-25T09:27:09.255Z",
      updatedAt: "2025-05-25T09:27:09.255Z",
      __v: 0,
    },
    {
      location: {
        country: "USA",
        state: "California",
        city: "San Francisco",
      },
      _id: "6832e275e9d9e52745865eab",
      user: "68305fc2cdcb464507f36dcf",
      company: "Google",
      role: "Backend Engineer",
      isRemote: false,
      status: "Offer",
      notes: "Received an offer! Need to respond by June 10th.",
      createdAt: "2025-05-10T09:27:17.510Z",
      updatedAt: "2025-05-25T09:27:17.510Z",
      __v: 0,
    },
    {
      location: {
        country: "India",
        state: "Karnataka",
        city: "Bangalore",
      },
      _id: "6832e27ee9d9e52745865eae",
      user: "68305fc2cdcb464507f36dcf",
      company: "Amazon",
      role: "Full Stack Developer",
      isRemote: false,
      status: "Applied",
      notes: "",
      createdAt: "2025-05-22T09:27:26.230Z",
      updatedAt: "2025-05-25T09:27:26.230Z",
      __v: 0,
    },
    {
      location: {
        country: "India",
        state: "Telangana",
        city: "Hyderabad",
      },
      _id: "6832e28ce9d9e52745865eb2",
      user: "68305fc2cdcb464507f36dcf",
      company: "Salesforce",
      role: "Software Engineer",
      isRemote: false,
      status: "Rejected",
      notes: "Was rejected after the technical interview. Need to work on system design skills.",
      createdAt: "2025-05-15T09:27:40.122Z",
      updatedAt: "2025-05-25T09:27:40.122Z",
      __v: 0,
    },
    {
      _id: "6832e293e9d9e52745865eb5",
      user: "68305fc2cdcb464507f36dcf",
      company: "Meta",
      role: "Frontend Developer",
      isRemote: false,
      status: "Applied",
      notes: "",
      createdAt: "2025-05-25T09:27:47.782Z",
      updatedAt: "2025-05-25T09:27:47.782Z",
      __v: 0,
    },
    {
      _id: "6832e2abe9d9e52745865eb8",
      user: "68305fc2cdcb464507f36dcf",
      company: "Uber",
      role: "Backend Engineer",
      isRemote: false,
      status: "Interview",
      notes: "Have second interview scheduled for June 2nd.",
      createdAt: "2025-05-20T09:28:11.982Z",
      updatedAt: "2025-05-25T09:28:11.982Z",
      __v: 0,
    },
    {
      _id: "6832e2b7e9d9e52745865ebb",
      user: "68305fc2cdcb464507f36dcf",
      company: "Shopify",
      role: "Full Stack Developer",
      isRemote: true,
      status: "Applied",
      notes: "Applied for remote position. Looking forward to hearing back.",
      createdAt: "2025-05-25T09:28:23.687Z",
      updatedAt: "2025-05-25T09:28:23.687Z",
      __v: 0,
    },
    {
      location: {
        country: "USA",
        state: "Washington",
        city: "Seattle",
      },
      _id: "6832e2c8e9d9e52745865ebc",
      user: "68305fc2cdcb464507f36dcf",
      company: "Adobe",
      role: "UX Designer",
      isRemote: false,
      status: "Interview",
      notes: "Portfolio was well-received. Technical interview next week.",
      createdAt: "2025-05-18T09:28:40.542Z",
      updatedAt: "2025-05-25T09:28:40.542Z",
      __v: 0,
    },
    {
      _id: "6832e2d4e9d9e52745865ebd",
      user: "68305fc2cdcb464507f36dcf",
      company: "Spotify",
      role: "Data Scientist",
      isRemote: true,
      status: "Applied",
      notes: "Applied for the music recommendation team. Excited for this opportunity!",
      createdAt: "2025-05-23T09:28:52.300Z",
      updatedAt: "2025-05-25T09:28:52.300Z",
      __v: 0,
    },
    {
      location: {
        country: "Germany",
        state: "Berlin",
        city: "Berlin",
      },
      _id: "6832e2e0e9d9e52745865ebe",
      user: "68305fc2cdcb464507f36dcf",
      company: "SAP",
      role: "Cloud Developer",
      isRemote: false,
      status: "Rejected",
      notes: "Got feedback that they're looking for someone with more cloud experience.",
      createdAt: "2025-05-12T09:29:04.124Z",
      updatedAt: "2025-05-25T09:29:04.124Z",
      __v: 0,
    },
    {
      location: {
        country: "India",
        state: "Karnataka",
        city: "Bangalore",
      },
      _id: "6832e2ece9d9e52745865ebf",
      user: "68305fc2cdcb464507f36dcf",
      company: "Flipkart",
      role: "Backend Engineer",
      isRemote: false,
      status: "Applied",
      notes: "",
      createdAt: "2025-05-24T09:29:16.965Z",
      updatedAt: "2025-05-25T09:29:16.965Z",
      __v: 0,
    },
    {
      location: {
        country: "USA",
        state: "New York",
        city: "New York",
      },
      _id: "6832e2f8e9d9e52745865ec0",
      user: "68305fc2cdcb464507f36dcf",
      company: "IBM",
      role: "Blockchain Developer",
      isRemote: false,
      status: "Interview",
      notes: "First round technical interview completed. Waiting for feedback.",
      createdAt: "2025-05-19T09:29:28.788Z",
      updatedAt: "2025-05-25T09:29:28.788Z",
      __v: 0,
    },
    {
      _id: "6832e304e9d9e52745865ec1",
      user: "68305fc2cdcb464507f36dcf",
      company: "Airbnb",
      role: "Frontend Engineer",
      isRemote: true,
      status: "Interview",
      notes: "Skills test submitted. Scheduling follow-up interview.",
      createdAt: "2025-05-21T09:29:40.612Z",
      updatedAt: "2025-05-25T09:29:40.612Z",
      __v: 0,
    },
    {
      location: {
        country: "UK",
        state: "England",
        city: "London",
      },
      _id: "6832e310e9d9e52745865ec2",
      user: "68305fc2cdcb464507f36dcf",
      company: "Monzo",
      role: "DevOps Engineer",
      isRemote: false,
      status: "Offer",
      notes: "Received an offer with good compensation package. Reviewing the details.",
      createdAt: "2025-05-05T09:29:52.435Z",
      updatedAt: "2025-05-25T09:29:52.435Z",
      __v: 0,
    },
  ];

  return (
    <>
      {/* Stats Overview */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <button
          onClick={handleOpenModal}
          className="flex items-center bg-blue-600 rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Job
        </button>
      </div>

      <StatisticsTiles data={statisticsData} />

      {/* Recent Applications */}
      <div className="mb-8">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Recent Applications</h2>
        <JobsList jobs={jobsData} />
      </div>

      {/* Add Job Modal */}
      <AddJobModal isOpen={isAddModalOpen} onClose={handleCloseModal} onSubmit={handleAddJob} />
    </>
  );
};

export default JobsDashboard;
