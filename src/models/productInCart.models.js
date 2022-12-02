const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ProductsInCart = db.define("productsInCart", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "cart_id",
        references: {
            model: "cart",
            key: "id"
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id",
        references: {
            model: "products",
            key: "id"
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {isFloat: true}
    },
    status: {
        type: DataTypes.ENUM("purchased", "not_purchased"),
        allowNull: false,
        defaultValue: "not_purchased"
    }
}, {timestamps: true, updatedAt: true});

module.exports = ProductsInCart;