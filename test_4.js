// const departments = {
//   qa: ["Anna", "Bob"],
//   dev: ["John", "Kate", "Igor"],
//   hr: ["Liza"],
// };
// function getAllEmployees(departments) {
//   let employees = [];
//   for (const key in departments) {
//     employees = employees.concat(departments[key]);
//   }
//   return employees;
// }
// console.log(getAllEmployees(departments));

// const departments = {
//   qa: ["Anna", "Bob"],
//   dev: ["John", "Kate", "Igor"],
//   hr: ["Liza"],
// };
// function getAllEmployees(departments) {
//   let employees[];
//   departments.forEach(department => {
//     employees = department;
//     return employees;
//   });
// }
// console.log(getAllEmployees());

const departments = {
  qa: ["Anna", "Bob"],
  dev: ["John", ["Kate"], "Igor"],
  hr: ["Liza"],
};
function getAllEmployees(departments) {
  return Object.values(departments).flat(Infinity);
}
console.log(getAllEmployees(departments));
