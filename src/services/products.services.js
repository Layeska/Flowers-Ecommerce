const { Products, Users } = require("../models");

class ProductsService {

    static async getAllProduct(offset, limit) {
        try {
            return await Products.findAndCountAll({
                offset, limit,
                attributes: {exclude: ["category_id", "user_id"]}
            });
        } catch(error) { throw error; }
    }

    static async showProducts(id) {
        try {
            const result = await Products.findAll({ 
                where: {userId: id},
                include: {
                    model: Users,
                    attributes: ["userName"]
                },
                attributes: { exclude: ["createdAt", "updatedAt"]},
            });
            return result;
        } catch(error) { throw error; }
    };

    static async create(newProduct) {
        try {
            return await Products.create(newProduct);
        } catch(error) { throw error; }
    }
};


module.exports = ProductsService;