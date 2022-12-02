const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Daisy Flower
 *         description:
 *           type: string
 *           example: It is a popular remedy against diseases and has a wide variety of application forms. as in wounds, blisters, burns and to reduce inflammation.
 *         image:
 *           type: string
 *           example: https://4.bp.blogspot.com/-FfTrEldU-ZM/X0awY2oEn6I/AAAAAAAABec/CbqP0SxDPl4Srgy7C8RnDdN3mxMI9QR1ACK4BGAYYCw/s1600/IMG_5980.jpeg
 *         price:
 *           type: decimal
 *           example: 80.00
 *         availableQty:
 *           type: integer
 *           example: 53
 *         status:
 *           type: active/inactive
 *           example: active
 *         categoryId:
 *           type: integer
 *           example: 2
 *         userId:
 *           type: integer
 *           example: 1
 *     flowers:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Daisy Flower
 *         description:
 *           type: string
 *           example: It is a popular remedy against diseases and has a wide variety of application forms. as in wounds, blisters, burns and to reduce inflammation.
 *         image:
 *           type: string
 *           example: https://4.bp.blogspot.com/-FfTrEldU-ZM/X0awY2oEn6I/AAAAAAAABec/CbqP0SxDPl4Srgy7C8RnDdN3mxMI9QR1ACK4BGAYYCw/s1600/IMG_5980.jpeg
 *         price:
 *           type: decimal
 *           example: 80.00
 *         availableQty:
 *           type: integer
 *           example: 53
 *         categoryId:
 *           type: integer
 *           example: 2
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */ 


const Products = db.define("products", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    availableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        /*validate: {
            qtyValidator(value) {
                if(value < 0) {
                    throw new Error("No se puede ingresar cantidades >= 0");
                }
            }
        }*/
    },
    status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active"
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id"
    },
    userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        references: {
            model: "users",
            key: "id"
        }
    }
}, { timestamps: true, updatedAt: false});

module.exports = Products;