const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/users.json");

function readUsers() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");
}

function addUser(newUser) {

  const users = readUsers();
  const nextId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const userToAdd = { id: nextId, ...newUser };
  users.push(userToAdd);
  writeUsers(users);
  return userToAdd;
}

function getUserByUsername(username) {
  const users = readUsers();
  return users.find(user => user.username === username);
}

module.exports = { addUser, getUserByUsername, readUsers };