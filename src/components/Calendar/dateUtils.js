import addDays from "date-fns/add_days";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December"
];

export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function chunkArray(arr, chunk_size) {
  let results = [];
  while (arr.length) {
    results.push(arr.splice(0, chunk_size));
  }

  return results;
}

function getCalMonthDays(month, year) {
  let calDays = [];
  const monthFirst = new Date(year, month, 1);
  const monthEnd = new Date(year, month + 1, 0);
  const start =
    monthFirst.getDay() > 0
      ? new Date(year, month, 0 - (monthFirst.getDay() - 1))
      : monthFirst;
  const end =
    monthEnd.getDay() != 6
      ? new Date(year, month + 1, 6 - monthEnd.getDay())
      : monthEnd;

  let currentDate = start;

  while (currentDate <= end) {
    calDays = [...calDays, currentDate];
    currentDate = addDays(currentDate, 1);
  }
  return calDays;
}

export const getCalendarWeeks = (year, month) => {
  return chunkArray(getCalMonthDays(month, year), 7);
};
