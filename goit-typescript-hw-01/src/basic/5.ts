// enum class DayOfWeek {
//   Monday = false;
//   Tuesday = false;
//   Wensday = false;
//   Thurday = false;
//   Friday = false;
//   Saturday = true;
//   Sunday = true;
// }

// const isWeekend = (day: DayOfWeek) => {};

// isWeekend(DayOfWeek.Friday);

enum DayOfWeek {
  MONDAY = "false",
  TUESDAY = "false",
  WENDSDAY = "false",
  Thurday = "false",
  FRIDAY = "false",
  SATURDAY = "true",
  SUNDAY = "true",
}

const isWeekend = (day: DayOfWeek) => {};

isWeekend(DayOfWeek.FRIDAY);

// Типізуйте функцію isWeekend яка приймає день
// тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
