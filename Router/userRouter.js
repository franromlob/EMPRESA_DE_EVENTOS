const { addUser } = require("../Controller/userController");

const router = require("express").Router();

// Cambia '/singup' a '/signup'
router.post("/signup", addUser);

module.exports = router;
