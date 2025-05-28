/**
 * Format date to be more readable
 * @param dateString - ISO date string
 * @returns Formatted date string (e.g., "May 28, 2025")
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

/**
 * Calculate time elapsed since a given date
 * @param dateString - ISO date string
 * @returns Humanized time elapsed (e.g., "Today", "Yesterday", "5 days ago")
 */
export const getTimeSinceApplied = (dateString: string) => {
  const appliedDate = new Date(dateString);
  const now = new Date(); // Using current date
  const diffTime = Math.abs(now.getTime() - appliedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  return `${diffDays} days ago`;
};
