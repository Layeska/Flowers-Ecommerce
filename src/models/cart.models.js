const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     shopping:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *           example: 1
 *         quantity:
 *            type: integer
 *            example: 1
 *     cart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: int
 *           example: 1
 *         totalPrice:
 *           type: decimal
 *           example: 105.20
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */ 

const Cart = db.define("cart", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        allowNull: false,
        references: {
            model: "users",
            key: "id"
        }
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, { timestamps: true, updatedAt: false});

module.exports = Cart;