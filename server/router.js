// =============== Variebles ===================
const express = require("express");
const route = express();
// =============== Variebles ===================

// =============== Functions ===================
route.get("/", (req, res) => {
  res.send("Home");
});
route.get("/register", (req, res) => {
  res.send("Register");
});
route.get("/login", (req, res) => {
  res.send("log-in");
});
// =============== Functions ===================

// =============== Exports ===================
module.exports = route;
// =============== Exports ===================
