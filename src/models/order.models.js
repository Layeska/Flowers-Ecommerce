const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     purchase:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         totalPrice:
 *           type: decimal
 *           example: 105.20
 *         userId:
 *           type: int
 *           example: 1
 *         status:
 *           type: string
 *           example: not_purchased
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */ 


const Orders = db.define("orders", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        field: "total_price"
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id", 
        references: {
            model: "users",
            key: "id"
        }
    },
    status: {
        type: DataTypes.ENUM("purchased", "not_purchased"),
        allowNull: false,
        defaultValue: "purchased"
    }
}, {timestamps: true, updatedAt: true});

module.exports = Orders;