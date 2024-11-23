const tasksOperations = require("../operations/tasksOperations");

const isTaskOwner = (req, res, next) => {
  const taskId = parseInt(req.params.id);
  const task = tasksOperations.getTaskById(taskId);
  

  if (!task || task.userId !== req.user.id) {
    return res.status(403).json({ error: "Proibido: Você não é o proprietário desta tarefa" });
  }
  
  next();
};

module.exports = isTaskOwner;