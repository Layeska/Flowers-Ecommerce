const { Users, Cart } = require("../models");

class UserService {
    static async showUsers() {
        try {
            const result = await Users.findAll();
            return result;
        } catch(error) { throw error; }
    };

    static async create(newUser) {
        try {
            const result = await Users.create(newUser);
            await Cart.create({userId: result.id, totalPrice: 0});
            
            return result;
        } catch(error) { throw error; }
    };
};



module.exports = UserService;