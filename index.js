const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const routes = require("./routes");
const usersOperations = require("./operations/usersOperations");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET || "your_secret_here",
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(

  (username, password, done) => {
    const user = usersOperations.getUserByUsername(username);
    if (!user) {
      return done(null, false, { message: "Username Incorreto." });
    }
    // Comparação de senha
    if (user.password !== password) {
      return done(null, false, { message: "Password Incorreto ." });
    }
    return done(null, user);
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {

  const user = usersOperations.readUsers().find(user => user.id === id);
  done(null, user);
});

// Rotas
app.use("/api", routes);

// Middleware de tratamento de erros
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});