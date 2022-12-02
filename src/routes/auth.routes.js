const { Router } = require("express");
const { login } = require("../controllers");

const router = Router();

router.post("/auth/login", login);

module.exports = router;


/*
++ Login of example:
{
    "userName": "Layeska",
    "email": "layeska@outlook.com",
    "password": "17df69a"
}
*/