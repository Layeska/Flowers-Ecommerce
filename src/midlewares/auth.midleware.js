const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
    const bearerToken = req.headers.authorization;

    if(bearerToken) {
        const token = bearerToken.split("Bearer ")[1];

        try {
            const tokenUser = jwt.verify(token, process.env.SECRET, "HS512");
            const {userId} = req.params;

            if(tokenUser.id === Number(userId)) {
                next();
            } else {
                res.status(403).json({message: "Unauthorized user!"});
            }
            
        } catch(error) {
            next({
                status: 400,
                errorContent: error,
                message: "Invalid Token!"
            });
        }
    }
};

module.exports = authenticate;