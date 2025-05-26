// A simple SVG illustration for the login/register pages
export const JobIllustration = () => (
  <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="300" height="300" rx="20" fill="#F3F4F6" />

    {/* Briefcase */}
    <rect x="100" y="110" width="100" height="80" rx="8" fill="#3B82F6" />
    <rect x="110" y="105" width="80" height="10" rx="5" fill="#2563EB" />

    {/* Papers */}
    <rect x="120" y="130" width="60" height="40" rx="4" fill="#F9FAFB" />
    <rect x="130" y="140" width="40" height="4" rx="2" fill="#94A3B8" />
    <rect x="130" y="150" width="40" height="4" rx="2" fill="#94A3B8" />
    <rect x="130" y="160" width="25" height="4" rx="2" fill="#94A3B8" />

    {/* Desktop */}
    <rect x="60" y="200" width="180" height="5" rx="2.5" fill="#6B7280" />

    {/* Speech bubbles */}
    <circle cx="80" cy="80" r="25" fill="#BFDBFE" />
    <polygon points="80,110 85,92 75,92" fill="#BFDBFE" />

    <circle cx="220" cy="80" r="25" fill="#BFDBFE" />
    <polygon points="220,110 225,92 215,92" fill="#BFDBFE" />

    {/* People silhouettes */}
    <circle cx="50" cy="60" r="15" fill="#4B5563" />
    <rect x="40" y="75" width="20" height="30" rx="10" fill="#4B5563" />

    <circle cx="250" cy="60" r="15" fill="#4B5563" />
    <rect x="240" y="75" width="20" height="30" rx="10" fill="#4B5563" />
  </svg>
);
