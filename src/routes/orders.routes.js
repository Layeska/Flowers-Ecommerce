const { Router } = require("express");
const { getPurchase, createPurchase } = require("../controllers");

const authenticate = require("../midlewares/auth.midleware");

const router = Router();

/**
 * @openapi
 * /api/v1/orders/{userId}:
 *   post:
 *     summary: Generates the purchase of the products in the cart
 *     tags: [Create purchase]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *   get:
 *     tags: [Show Purchases]
 *     summary: show purchases
 *     security: 
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
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
 *                     $ref: "#/components/schemas/purchase"
 */ 


router.get("/orders/:userId", authenticate, getPurchase);

router.post("/orders/:userId", authenticate, createPurchase);

module.exports = router;