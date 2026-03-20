const rawUser = {
  name: "  John  ",
  age: "25",
  isActive: "false",
};

function normalizeUser(user) {
  user.name = user.name.trim();
  user.age = Number(user.age);
  user.isActive = Boolean(user.isActive);
  return user;
}

const cleanUser = normalizeUser(rawUser);
console.log(cleanUser);
