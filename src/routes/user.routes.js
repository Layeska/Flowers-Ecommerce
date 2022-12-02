const { Router } = require("express");
const { getUser, createUser } = require("../controllers");

const router = Router();

/**
 * @openapi
 * /api/v1/user:
 *   post:
 *     summary: Create a new user
 *     tags: [Register Users]
 *     requestBody:
 *       description: To register a new user you need a FirstName, LastName, Email, Phone and Password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/register"
*/ 

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Login of a registered user
 *     tags: [Login Users]
 *     requestBody:
 *       description: Login
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/login"
*/  



router.get("/user", getUser);

//++ Create users
router.post("/user", createUser);

module.exports = router;

/*
{
    "userName": "Layeska",
    "email": "layeska@outlook.com",
    "password": "17df69a"
}

*/