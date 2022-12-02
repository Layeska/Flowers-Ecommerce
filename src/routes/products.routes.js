const { Router } = require("express");
const { getProducts, createProduct, getAll } = require("../controllers");

const authenticate = require("../midlewares/auth.midleware");

const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     tags: [Get all products]
 *     summary: Show all available flowers
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
 *                   items: {}
 * /api/v1/products/{userId}:
 *   post:
 *     summary: create a new product with the logged in user id
 *     security:
 *       - bearerAuth: []
 *     tags: [Register Product]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/flowers"
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
 *                     $ref: "#/components/schemas/products"
 *   get:
 *     summary: Shows the products of the logged in user, whose quantity is greater than zero
 *     security: 
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     tags: [Show Products]
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
 *                   items: {}
 */ 


//++ Show the all products in cart 
router.get("/products", getAll);

//++ Show the all products using login
router.get("/products/:userId", authenticate, getProducts);

//++
router.post("/products/:userId", authenticate, createProduct);


module.exports = router;