const express = require('express');
const router = express.Router();
const signup = require('../controller/usersign.controller.js');
const login = require("../controller/userlogin.controller.js");


router.post("/sign", signup);
router.post("/login", login);



module.exports = router;
