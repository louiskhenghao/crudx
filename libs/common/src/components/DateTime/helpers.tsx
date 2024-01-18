import dayjs from 'dayjs';

/**
 * ===========================
 * MAIN
 * ===========================
 */
// function to calculate next update
export const calculateNextUpdate = (date) => {
  const now = dayjs();
  const diffInSeconds = now.diff(date, 'second');

  if (diffInSeconds < 60) {
    // less than a minute ago, update every 5 seconds
    return 5000;
  } else if (diffInSeconds < 3600) {
    // less than an hour ago, update every 30 seconds
    return 30000;
  } else if (diffInSeconds < 86400) {
    // less than a day ago, update every 5 minutes
    return 300000;
  } else {
    // more than a day ago, update every hour
    return 3600000;
  }
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default { calculateNextUpdate };
