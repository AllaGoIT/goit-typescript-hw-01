// Створіть змінну, яка може містити або рядок,
//     або число(union type) ? Також, оголосіть змінну,
//         яка може містити лише одне з двох можливих рядкових
// значень: 'enable' або 'disable'(literal type).

type day = string | number;
let value: day;
value = "Monday";
value = 1;

type room = "enable" | "disable";

let answer: room;

answer = "disable";

answer = "enable";
