const validateTask = (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "Título e descrição são obrigatórios" });

  }

  next(); // Passa o controle para o próximo middleware ou rota
};

module.exports = validateTask;