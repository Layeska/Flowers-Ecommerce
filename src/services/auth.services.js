const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthServices {
    static async authenticate(credentials) {
        try {
            const { email, password } = credentials;
            const login = await Users.findOne({ where: {email}});

            if(login) {
                const isValid = bcrypt.compareSync(password, login.password);
                return isValid ? {isValid, login} : isValid;
            } else { return login; }
        } catch(error) { throw error; }
    };

    static generateToken(data) {
        try {
            const token = jwt.sign(data, process.env.SECRET, { expiresIn: '5d', algorithm: "HS512" });
            console.log(`\n *** Token Generated For User ${data.userName} is: ${token} ***\n`);
            return token;
        } catch(error) { throw error; }
    }
};

module.exports = AuthServices;