const rawUser = {
  name: "  John  ",
  age: "25",
  isActive: "true",
};

function normalizeUser(user) {
  user.name = user.name.trim();
  user.age = Number(user.age);
  user.isActive = user.isActive === "true";
  return user;
}

const cleanUser = normalizeUser(rawUser);
console.log(cleanUser);
