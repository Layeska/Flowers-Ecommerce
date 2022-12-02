const { getUser, createUser } = require("./user.controller");
const { getAll, getProducts, createProduct } = require("./product.controller");
const { addCart, getCart } = require("./cart.controller");
const {getPurchase, createPurchase} = require("./order.controller");
const { showCategories, getCategoryById, createCategory, deleteCategory } = require("./category.controller");
const login = require("./auth.controller");

module.exports = { getUser, createUser, getAll, getProducts, createProduct, addCart, 
    getCart, getPurchase, createPurchase, showCategories, createCategory, getCategoryById, deleteCategory, login };