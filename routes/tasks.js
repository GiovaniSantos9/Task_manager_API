const router = require("express").Router();
const tasksController = require("../controllers/tasksController");
const isAuthenticated = require("../middleware/isAuthenticated");
const isTaskOwner = require("../middleware/isTaskOwner");
const validateTask = require("../middleware/validateTask");

router.post("/create", isAuthenticated, validateTask, tasksController.createTask);
router.get("/", isAuthenticated, tasksController.getAllTasks);
router.put("/:id/edit", isAuthenticated, isTaskOwner, validateTask, tasksController.editTask);
router.delete("/:id/delete", isAuthenticated, isTaskOwner, tasksController.deleteTask);


module.exports = router;