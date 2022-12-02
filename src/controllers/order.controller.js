const { OrderServices } = require("../services");
const { Users, Products } = require("../models");
const registerBuy = require("../template/RegisterToBuy");
const transporter = require("../utils/mailer");

require("dotenv").config();
const date = require('date-and-time');

const now = new Date();
const dateNow = date.format(now, 'ddd, MMM DD YYYY');

const getPurchase = async(req, res, next) => {
    try {
        const {userId} = req.params;
        const offset = Number(req.query.offset ?? 0);
        const limit = Number(req.query.limit ?? 1);

        const view = await OrderServices.getAll(Number(userId), offset, limit);
        //res.json(view);

        const {count, rows} = view;
        res.json({
            count,
            next: offset < count ? `${process.env.HOST_NAME}:${process.env.PORT}/api/v1${req.path}?offset=${offset+limit}&limit=${limit}` : null,
            previous: offset > 0 ? `${process.env.HOST_NAME}:${process.env.PORT}/api/v1/${req.path}?offset=${offset-limit}&limit=${limit}` : null,
            view: rows
        });
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
        
        const userModel = await Users.findOne({where: {id: userId}});
        const product = await Products.findOne({where: {userId: userId}});
        const order = await OrderServices.create(info);

        console.log("UserModel: ", userModel);
        console.log("Products: ", product)
        transporter.sendMail({
            from: "<lisa13suarez@gmail.com>",
            to: userModel.email,
            subject: "Thanks For Your Order!",
            text: `${userModel.userName} Thanks For Your Order!`,
            html: registerBuy(userModel.userName, order.id, dateNow)
        });
        
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