// enum  DayOfWeek {
//   Monday= false;
//   Tuesday = false;
//   Wensday = false;
//   Thursday = false;
//   Friday = false;
//   Saturday = true;
//   Sunday = true;
// }

// const isWeekend = (day: DayOfWeek): boolean => {
//   return DayOfWeek.FRIDAY;
// };

// isWeekend(DayOfWeek.Friday);

// enum DayOfWeek {
//   Monday = "false",
//   TUESDAY = "false",
//   WENDSDAY = "false",
//   Thursday = "false",
//   FRIDAY = "false",
//   SATURDAY = "true",
//   SUNDAY = "true",
// }

// const isWeekend = (day: DayOfWeek) => {
//   return DayOfWeek.FRIDAY;
// };

// isWeekend(DayOfWeek.FRIDAY);

// Типізуйте функцію isWeekend яка приймає день
// тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum DayOfWeek {
  MONDAY = "false",
  TUESDAY = "false",
  WENDSDAY = "false",
  ThURSDAY = "false",
  FRIDAY = "false",
  SATURDAY = "true",
  SUNDAY = "true",
}

const isWeekend = (day: DayOfWeek) => {
  if (DayOfWeek.FRIDAY === "false") {
    return false;
  } else {
    return true;
  }
};
isWeekend(DayOfWeek.FRIDAY);
