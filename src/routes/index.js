const userRoute = require("./user.routes");
const productRoute = require("./products.routes");
const authRoute = require("./auth.routes");
const cartRoute = require("./cart.routes");
const Orders = require("./orders.routes");
const CategoryRoute = require("./category.routes");


module.exports = { userRoute, productRoute, cartRoute, Orders, CategoryRoute, authRoute };