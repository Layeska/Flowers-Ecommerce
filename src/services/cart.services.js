const { Cart, ProductInCart, Products } = require("../models");
/* 
{
    **productId
    **quantity
}
*/
let sumGlobal = 0.00;

class CartServices {
    static async create(newProduct) {
        try {
            const product = await Products.findOne({where: newProduct.productId});
            let cart = await Cart.findOne({ where: {userId: newProduct.userId}}); 

            let sum = 0.0;
            let total = 0.0;

            /*if(cart === null) {
                cart = await Cart.create({userId: newProduct.userId, totalPrice: sumGlobal});
            }*/
            
            total = Number(cart.totalPrice);

            if(product && cart ) {
                const addProduct = await ProductInCart.create({
                    cartId: cart.id,
                    quantity: newProduct.quantity,
                    productId: product.id,
                    price: product.price
                });

                sum += addProduct.price;
                sumGlobal += sum;
                cart.totalPrice = sumGlobal;
                total = cart.totalPrice;

                console.log("Cart.totalPrice: ", cart.totalPrice);
                console.log("SumGlobal ", sumGlobal);
                console.log("Total: " + total);

                const {totalPrice} = cart;
                console.log("Desctucturando totalPrice: ", totalPrice);
                
                return true;
            } 
                
            return false;
        } catch(error) { throw error; }
    };

    static async getAll(userId) {
        try {
            return await Cart.findAndCountAll({ 
                where: {userId: userId},
                attributes: {
                    exclude: ["user_id"]
                },
                include: {
                    model: ProductInCart,
                    required: true,
                    attributes: {
                        exclude: ["product_id", "cart_id", "updatedAt"]
                    }
                }
            });
        } catch(error) { throw error; }
    }
}

module.exports = CartServices;