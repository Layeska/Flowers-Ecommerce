const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

/**
 * @openapi
 * components:
 *   schemas:
 *     login:
 *       type: object
 *       properties:
 *         userName:
 *           type: string
 *           example: Layeska
 *         email:
 *           type: string
 *           example: layeska@outlook.com
 *         password:
 *           type: string
 *           example: 17df69a
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkxheWVza2EiLCJlbWFpbCI6ImxheWVza2FAb3V0bG9vay5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCQ1SUJkYkRuS2N6WkV0SzMxWUtTaVV1ZlFYLjIyZlIwdW0vZkx4UUhHNVVJTmhVbzBNSVFJRyIsImlhdCI6MTY2OTc2ODAxNywiZXhwIjoxNjcwMjAwMDE3fQ._bjItllTifH1pnSzL4px-q_6lPl1TxpYXPhYXFaIg_yJLV-yRBewEV4uxzxZsMpUsyLo2AwKqKzFV8Q1pK9GbA
 *     register:
 *       type: object
 *       properties:
 *         userName:
 *           type: string
 *           example: Layeska
 *         email:
 *           type: string
 *           example: layeska@outlook.com
 *         password:
 *           type: string
 *           example: 17df69a
 */ 

const Users = db.define("users", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        field: "user_name",
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: { isEmail: true }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate: (user, options) => {
            const {password} = user;
            const hash = bcrypt.hashSync(password, 8);
            user.password = hash;
        }
    }
});

module.exports = Users;