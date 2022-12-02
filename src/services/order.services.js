const { Order, Cart, ProductInCart, ProductsInOrder } = require("../models");
const { forEach } = require("p-iteration");

class OrderServices {
    static async getAll(userId) {
        try {
            return await Order.findAll({ 
                where: {userId: userId},
                include: { model: ProductsInOrder}
            });
        } catch(error) { throw error; }
    };

    static async create(info) {
        try {
            const created = await Order.create({ userId: info, totalPrice: 0, status: "purchased" });

            console.log("\n**** creating the order ****");

            const orderId = created.id;

            const auxCart = await Cart.findOne({ where: { userId: info}, include: { model: ProductInCart } });

            console.log("**** Adding the cart ****")

            const auxList = auxCart.productsInCarts;

            const listPurchased = auxList.map((product) => {
                return {
                    orderId: orderId,
                    productId: product.productId,
                    quantity: product.quantity,
                    price: product.price,
                    status: "purchased"
                };
            });

            console.log("**** Managing the purchase of products ****");

            await forEach(listPurchased, async data => await ProductsInOrder.create(data));

            const data = await Order.findOne({
                where: { id: orderId},
                include: { model: ProductsInOrder } });


            //! look for the order and destroy the cart

            await ProductInCart.destroy({where: {cartId: created.userId}});

            console.log("*** An email has been sent with the receipt number ***");
            return data;
        } catch(error) { throw error; }
    };
};

module.exports = OrderServices;