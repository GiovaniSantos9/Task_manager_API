const tasksOperations = require("../operations/tasksOperations");


const createTask = (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id; // Obter o ID do usuário autenticado

  const newTask = tasksOperations.addTask({ title, description, userId });
  return res.status(201).json({
    success: true,
    task: newTask,
  });
};

const getAllTasks = (req, res) => {
  const userId = req.user.id; // Obter o ID do usuário autenticado
  const tasks = tasksOperations.getTasksByUserId(userId);
  return res.status(200).json({
    success: true,

    tasks,
  });
};

const editTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description } = req.body;

  const updatedTask = tasksOperations.updateTask(taskId, { title, description });
  if (!updatedTask) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }

  return res.status(200).json({
    success: true,
    task: updatedTask,
  });
};

const deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const deletedTaskId = tasksOperations.deleteTask(taskId);

  if (deletedTaskId === null) {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }

  return res.status(200).json({
    success: true,
    message: "Tarefa excluída com sucesso",
  });
};

module.exports = {
  createTask,
  getAllTasks,
  editTask,
  deleteTask,
};