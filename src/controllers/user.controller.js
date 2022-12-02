const { userService } = require("../services");
const welcomeTemplate = require("../template/welcome");
const transporter = require("../utils/mailer");

const getUser = async(req, res, next) => {
    try {
        const viewUser = await userService.showUsers();
        res.status(201).json(viewUser);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "The request failed, verify data"
        });
    }
};

const createUser = async(req, res, next) => {
    try {
        const newUser = req.body;
        const userCreate = await userService.create(newUser);
        res.status(201).json(userCreate);

        transporter.sendMail({
            from: "<lisa13suarez@gmail.com>",
            to: userCreate.email,
            subject: "Welcome at Flowers Shop! 🌹",
            text: `Hi ${userCreate.userName} welcome at Flower Shop! My second API REST in Node JS with postgreSQL!`,
            html: welcomeTemplate(userCreate.userName)
        });
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "The request failed. Check the data you send"
        });
    }
};


module.exports = { getUser, createUser };