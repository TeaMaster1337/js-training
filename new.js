const departments = {
  qa: ["Anna", "Bob"],
  dev: ["John", ["Kate"], "Igor"],
  hr: ["Liza"],
};
function getAllEmployees(departments) {
  return Object.values(departments).flat(Infinity);
}
console.log(getAllEmployees(departments));
