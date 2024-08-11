// Типізуйте функцію isWeekend яка приймає день
// тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum DayOfWeek {
  MONDAY,
  TUESDAY,
  WENDSDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const isWeekend = (day: DayOfWeek) => {
  return day === DayOfWeek.SATURDAY || day === DayOfWeek.SUNDAY;
};
isWeekend(DayOfWeek.FRIDAY);
