const usersOperations = require("../operations/usersOperations");

const registerUser = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Nome de usuário e senha são obrigatórios" });
  }

  const existingUser = usersOperations.getUserByUsername(username);
  if (existingUser) {
    return res.status(400).json({ error: "O nome de usuário já existe" });
  }

  const newUser = usersOperations.addUser({ username, password });

  return res.status(201).json({
    success: true,
    user: { id: newUser.id, username: newUser.username },
  });
};

const loginUser = (req, res) => {
  return res.status(200).json({ success: true, user: req.user });
};

module.exports = { registerUser, loginUser };