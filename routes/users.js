const router = require("express").Router();
const usersController = require("../controllers/usersController");
const passport = require("passport");

router.post("/register", usersController.registerUser);
router.post("/login", passport.authenticate("local"), usersController.loginUser);

module.exports = router;