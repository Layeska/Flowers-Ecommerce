const { userService } = require("../services");

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
        res.json(userCreate);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "The request failed. Check the data you send"
        });
    }
};


module.exports = { getUser, createUser };