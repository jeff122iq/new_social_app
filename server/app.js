// =============== Variebles ===================
const express = require("express");
const config = require("config");
const PORT = config.get("PORT" || 5000);
const route = require("./router");
const app = express();
const cors = require("cors");
const userController = require("./controllers/userController");
// =============== Variebles ===================

// =============== Functions ===================
app.use(cors());
app.use(route);
app.use(userController);
app.listen(PORT, () => {
  console.log(`Server start on ${PORT}`);
});
// =============== Functions ===================
