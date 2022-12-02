const { Order, Cart, ProductInCart, ProductsInOrder } = require("../models");
const { forEach } = require("p-iteration");

class OrderServices {
    static async getAll(userId) {
        try {
            return await Order.findAll({ 
                where: {userId: userId},
                include: {
                    model: ProductsInOrder
                }
            });
        } catch(error) { throw error; }
    };

    /*
    {
        orderProduct: {
            [1, 1, 1, 10.50],
            [1,2,1,50.36]
        }
    }
    */

    static async create(info) {
        try {
            const created = await Order.create({
                userId: info,
                totalPrice: 0,
                status: "purchased"
            });

            console.log("\n********* Created - es la Orden: ******************\n")
            console.log(created);

            const orderId = created.id;

            const auxCart = await Cart.findOne({
                where: { userId: info},
                include: {
                    model: ProductInCart
                }
            });

            console.log("\n**************AuxCart: es El CART*******************\n")
            console.log(auxCart);

            const auxList = auxCart.productsInCarts;

            console.log("\n******************* AUXLIST - productInCart *********\n");
            console.log(auxList);
            //auxList.forEach(element => console.log(element));

            const listPurchased = auxList.map((product) => {
                return {
                    orderId: orderId,
                    productId: product.productId,
                    quantity: product.quantity,
                    price: product.price,
                    status: "purchased"
                };
            });

            console.log("\n********************** List Purchase es copia de product in order*******************\n")
            console.log(listPurchased);


            console.log("\n******** X: Los productos en order *********\n")
            const x = await forEach(listPurchased, async data => await ProductsInOrder.create(data));
            console.log(x);

            //Se buscar la orden 
            const data = await Order.findOne({
                where: { id: orderId},
                include: {
                    model: ProductsInOrder
                }
            });

            console.log("\n***********************DATA: Busca La orden \n");
            console.log(data);

            const y = await ProductInCart.destroy({where: {cartId: created.userId}});
            console.log("\n************** Borra el carrito ********\n");
            console.log(y);
            return data;
        } catch(error) { throw error; }
    };

};

module.exports = OrderServices;