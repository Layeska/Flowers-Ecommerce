const { userService } = require("../services");

const getUser = async(req, res, next) => {
    try {
        const viewUser = await userService.showUsers();
        res.json(viewUser);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "error"
        });
    }
};

/*
Request Body: 
{
    "userName": "",
    "email": "",
    "password": ""
}
*/

const createUser = async(req, res, next) => {
    try {
        const newUser = req.body;
        const userCreate = await userService.create(newUser);
        res.json(userCreate);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Check the data you send"
        });
    }
};


module.exports = { getUser, createUser };