// =============== Variebles ===================
const express = require("express");
const config = require("config");
const userController = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const { User } = require("../db/models");
userController.use(bodyParser.json());
userController.use(bodyParser.urlencoded({ extended: true }));
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// =============== Variebles ===================

// =============== Functions ===================
// Register
userController.post("/register", urlencodedParser, async (req, res) => {
  const email = await User.findOne({ where: { email: req.body.email } });
  if (email) {
    res.status(400).json({ message: "Пользователь уже создан" });
    return;
  }
  const passwordHash = await bcrypt.hash(req.body.password, 12);
  let user = User.build({
    userName: req.body.userName,
    email: req.body.email,
    password: passwordHash,
  });

  user.save();
  res.send(user);
  console.log(`REGISTER SUCCES`);

  return;
});
// Register

// Log-in
userController.post("/login", urlencodedParser, async function (req, res) {
  const user = await User.findOne({ where: { userName: req.body.userName } });
  if (!user) {
    return res.status(400).json({ message: "Пользователь не найден" });
  }
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Неверный пароль" });
  }

  // Access token generate
  const Accesstoken = jwt.sign(
    { email: user.email, userName: user.userName },
    config.get("JWT_SECRET"),
    {
      expiresIn: "1h",
    }
  );
  res.json({ Accesstoken, userName: user.userName, email: user.email });
  console.log(`LOG-IN SUCCES`);
});
// Log-in
// =============== Functions ===================

// =============== Exports ===================
module.exports = userController;
// =============== Exports ===================
