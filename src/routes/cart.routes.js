const { Router } = require("express");
const { addCart, getCart } = require("../controllers");

const authenticate = require("../midlewares/auth.midleware");

const router = Router();

/**
 * @openapi
 * /api/v1/cart/{userId}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     summary: Add products to cart
 *     tags: [Add products to cart]
 *     requestBody:
 *       description: cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/shopping"
 *   get:
 *     summary: Show cart products
 *     security: 
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     tags: [Show Cart]
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
 *                     $ref: "#/components/schemas/cart"
 */ 

router.get("/cart/:userId", authenticate, getCart);
router.post("/cart/:userId",authenticate, addCart);

module.exports = router;