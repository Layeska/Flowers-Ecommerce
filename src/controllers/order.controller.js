const { OrderServices } = require("../services");
const { Users } = require("../models");

const getPurchase = async(req, res, next) => {
    try {
        const {userId} = req.params;
        const view = await OrderServices.getAll(Number(userId));
        res.json(view);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Oops, an error has happened"
        });
    }
};

const createPurchase = async(req, res, next) => {
    try {
        const {userId} = req.params;
        const info = Number(userId);
        
        await Users.findOne({where: {id: userId}});
        const order = await OrderServices.create(info);

        res.status(201).json(order); 
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Oops, an error has happened, purchase not created"
        });
    }
}

module.exports = { getPurchase, createPurchase };