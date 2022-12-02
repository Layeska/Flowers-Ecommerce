const userService = require("./user.services");
const ProductsService =  require("./products.services");
const AuthServices = require("./auth.services");
const CartServices = require("./cart.services");
const OrderServices = require("./order.services");
const CategoryServices = require("./category.services");


module.exports = { userService, ProductsService,CartServices, 
                    OrderServices, CategoryServices, AuthServices };