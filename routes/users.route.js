const express = require('express');
const { getHome, getUser, saveUser } = require('../controllers/users.controller');
const router = express.Router();

router.get("/", getHome);

router.get("/users", getUser)

router.post("/users", saveUser)

module.exports = router;