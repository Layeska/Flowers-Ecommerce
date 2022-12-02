const db = require("../utils/database");
const initModel = require("../models/initModels");

const { Users, Products, Cart, ProductInCart, Order, ProductsInOrder, Categories } = require("../models");

initModel();

const user = [
    { userName: "Laura", email: "laura@gmail.com", password: "1478ghl778" },
    { userName: "Kevin", email: "kevin@gmail.com", password: "78963lal887" },
    { userName: "Jose", email: "jose@outlook.com", password: "er0b14s126s" }
];

const categories = [ {name: "Monocotyledons"}, {name: "Dicotyledonous"} ];

/*const product = [
    { name: "Gerbera Mini", description: "This plant from the African continent belongs to the Asteraceae family and has more than 150 varieties.", image: "https://i.postimg.cc/5y6mVn4J/Gerbera-Mini.png",price: 45.36, availableQty: 100, categoryId: 1},
    { name: "Bouquet de Rosas Rojas", description: "The red rose is the classic and quintessential gift for a month and anniversary. It is given to express a feeling of love, passion and great affection for someone.", image: "https://i.postimg.cc/CKGPPP16/Bouquet-de-Rosas-Rojas.png", price: 100.74,  availableQty: 150, categoryId: 2},
    { name: "Iris Blue", price: 57.06, description: "Iris Sibirica Perry's blue. Of Siberian origin is this beautiful aquatic plant. With beautiful colors in bluish tones.", image: "https://i.postimg.cc/vByjGRks/Iris-Blue.png",  availableQty: 0, categoryId: 1},
    { name: "Tulipanes", price: 30.00, description: "Tulips are flowering plants native to Central Asia. They belong to the Liliaceae family and the Tulipa genus, this is made up of around 125 varieties, of which very few are used for commercial purposes.",image: "https://i.postimg.cc/Z59Xcxp1/tulipanes.png",  availableQty: 200, status: "inactive", categoryId: 1}
];*/


const product = [
    { name: "Gerbera Mini", description: "This plant from the African continent belongs to the Asteraceae family and has more than 150 varieties.", image: "https://i.postimg.cc/5y6mVn4J/Gerbera-Mini.png",price: 45.36, availableQty: 100, categoryId: 1, userId: 1 },
    { name: "Bouquet de Rosas Rojas", description: "The red rose is the classic and quintessential gift for a month and anniversary. It is given to express a feeling of love, passion and great affection for someone.", image: "https://i.postimg.cc/CKGPPP16/Bouquet-de-Rosas-Rojas.png", price: 100.74,  availableQty: 150, categoryId: 2, userId: 2 },
    { name: "Iris Blue", price: 57.06, description: "Iris Sibirica Perry's blue. Of Siberian origin is this beautiful aquatic plant. With beautiful colors in bluish tones.", image: "https://i.postimg.cc/vByjGRks/Iris-Blue.png",  availableQty: 0, categoryId: 1, userId: 3 },
    { name: "Tulipanes", price: 30.00, description: "Tulips are flowering plants native to Central Asia. They belong to the Liliaceae family and the Tulipa genus, this is made up of around 125 varieties, of which very few are used for commercial purposes.",image: "https://i.postimg.cc/Z59Xcxp1/tulipanes.png",  availableQty: 200, status: "inactive", categoryId: 1, userId: 3 }
];

const cart = [
    { userId: 1, totalPrice: 145.74, status: "purchased" },
    { userId: 2, totalPrice: 45.36 },
    { userId: 3, totalPrice: 114.12 },
];

const productInCart = [
    { cartId: 1, productId: 1, quantity: 1, price: 45.36 },
    { cartId: 1, productId: 2, quantity: 1, price: 100.74 },
    { cartId: 2, productId: 1, quantity: 1, price: 45.36 },
    { cartId: 3, productId: 3, quantity: 2, price: 114.12 }
];

const order = [
    { totalPrice: 145.74, userId: 1 },
    /*{ totalPrice: 45.36, userId: 2 },
    { totalPrice: 114.12, userId: 3 }*/
];

const productInOrder = [
    { orderId: 1, productId: 1, quantity: 1, price: 45.36, status: "purchased"},
    { orderId: 1, productId: 2, quantity: 1, price: 100.74, status: "purchased"},
    /* { orderId: 2, productId: 1, quantity: 1, price: 45.36 },
    { orderId: 3, productId: 3, quantity: 2, price: 114.12 },*/
];

db.sync({force: true}).then(() => {
    console.log("**** synchronized Seed ****");
    user.forEach(async (user) => await Users.create(user));
    console.log("**** User data added to the Database successfully! ****");

    setTimeout(() => {
        categories.forEach(async(cat) => await Categories.create(cat));
        console.log("**** Categories data added to the Database successfully! ****");
    }, 100);

    setTimeout(() => {
        product.forEach(async (prod) => await Products.create(prod));
        console.log("**** Product data added to the Database successfully! ****");
    }, 150);

    setTimeout(() => {
        cart.forEach(async (item) => await Cart.create(item));
        console.log("**** Cart data added to the Database successfully! ****");
    }, 180);

    setTimeout(() => {
        productInCart.forEach(async (prod) => await ProductInCart.create(prod));
        console.log("**** Product In Cart data added to the Database successfully! ****");
    }, 200);

    setTimeout(() => {
        order.forEach(async (order) => await Order.create(order));
        console.log("**** Order data added to the Database successfully! ****");
    }, 250);
    
    setTimeout(() => {
        productInOrder.forEach(async (order) => await ProductsInOrder.create(order));
        console.log("**** Product in Order data added to the Database successfully! ****");
    }, 280);
});