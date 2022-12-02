const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ProductInOrder = db.define("productsInOrder", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "order_id",
        references: {
            model: "orders",
            key: "id"
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        field: "product_id",
        allowNull: false,
        references: {
            model: "products",
            key: "id"
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("purchased", "not_purchased"),
        allowNull: false,
        defaultValue: "not_purchased"
    }
}, {timestamps: true, updatedAt: true});

module.exports = ProductInOrder;