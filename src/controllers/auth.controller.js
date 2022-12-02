const { AuthServices } = require("../services");

const login = async(req, res, next) => {
    try {
        const credentials = req.body;
        const isLogin = await AuthServices.authenticate(credentials);

        if(isLogin) {
            const { id, userName, email, password }  = isLogin.login;
            const user = { id, userName, email, password };
            const token = AuthServices.generateToken(user);
            user.token = token;
            res.json({...user});
        } else {
            res.status(400).json({message: "Information is Invalid!"});
        }
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Failed to verify email or password"
        });
    }
};

module.exports = login;