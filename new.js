const departments = {
  qa: ["Anna", "Bob"],
  dev: ["John", "Kate", "Igor"],
  hr: ["Liza"],
};
function getAllEmployees(departments) {
  const employees = [];
  for (const key in departments) {
    if (departments.hasOwnProperty(key)) {
      employees.push(...departments[key].flat(Infinity));
    }
  }
  return employees;
}
console.log(getAllEmployees(departments));

// Test2233234324
// 23423432
// Comment
