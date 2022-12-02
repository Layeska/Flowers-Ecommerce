const {Users, Products, Cart, ProductInCart, Order, ProductsInOrder, Categories} = require("./index");

const initModels = () => {

    //! Relation 1:1
    // Tables in Relation:  user - cart  

    Users.hasOne(Cart, {as: "", foreignKey: "user_id"});
    Cart.belongsTo(Users, {as: "", foreignKey: "user_id"});


   //! Relation 1:N
    //Tables in Relation: User - Product | User - Order

    Users.hasMany(Products, {as: "", foreignKey: "user_id"});
    Products.belongsTo(Users, {as: "", foreignKey: "user_id"});

    Users.hasMany(Order, {as: "", foreignKey: "user_id"});
    Order.belongsTo(Users, {as: "", foreignKey: "user_id"});

    //Tables in Relation: Product - Categories
    Categories.hasMany(Products, {as: "", foreignKey: "category_id"});
    Products.belongsTo(Categories, {as: "", foreignKey: "category_id"});

    //! Relation N:N
    //Tables in Relation: Cart - Product

    Cart.hasMany(ProductInCart, {as: "", foreignKey: "cart_id"});
    ProductInCart.belongsTo(Cart, {as: "", foreignKey: "cart_id"});

    Products.hasMany(ProductInCart, {as: "", foreignKey: "product_id"});
    ProductInCart.belongsTo(Products, {as: "", foreignKey: "product_id"});

    //Tables in Relation: Order - Products
    Order.hasMany(ProductsInOrder, {as: "", foreignKey: "order_id"});
    ProductsInOrder.belongsTo(Order, {as: "", foreignKey: "order_id"});

    Products.hasMany(ProductsInOrder, {as: "", foreignKey: "product_id"});
    ProductsInOrder.belongsTo(Order, {as: "", foreignKey: "product_id"});
}

module.exports = initModels;