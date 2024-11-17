const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/tasks.json");

function readTasks() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), "utf-8");
}

function addTask(newTask) {
  const tasks = readTasks();
  const nextId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

  const taskToAdd = { id: nextId, ...newTask };
  tasks.push(taskToAdd);
  writeTasks(tasks);
  return taskToAdd;
}

function getTasksByUserId(userId) {
  const tasks = readTasks();
  return tasks.filter(task => task.userId === userId);
}

function getTaskById(taskId) {
  const tasks = readTasks();
  return tasks.find(task => task.id === taskId);
}

function updateTask(taskId, updatedTask) {
  const tasks = readTasks();

  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updatedTask };
    writeTasks(tasks);
    return tasks[index];
  }
  return null;
}

function deleteTask(taskId) {
  let tasks = readTasks();
  const filteredTasks = tasks.filter(task => task.id !== taskId);
  if (filteredTasks.length === tasks.length) {
    return null; // Não encontrou a tarefa com o ID fornecido
  }
  writeTasks(filteredTasks);
  return taskId;
}


module.exports = { addTask, getTasksByUserId, getTaskById, updateTask, deleteTask };