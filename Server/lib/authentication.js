const jwt = require("jsonwebtoken");
const validateUser = require("./validateUser");

async function authenticateUser(req, res, next) {
    // get user tokens
    const { token } = req.cookies;
    if (token) {
        try {
            // verify the token and get the userId
            const { userId } = await getVerifyToken(token);
            req.userId = userId;
            return next();
        } catch(e) {
            console.log(e);
        }
    }
    next();
}

function getSignToken(user) {
    if (validateUser(user)) {
        const { userId, email } = user; 
        const token = jwt.sign({userId, email}, process.env.SECRET_KEY, {expiresIn: "1h"});

        return token;
    }
}

function getVerifyToken(token) {
    return new Promise((res, rej) => {
        jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
            if (err) {
                console.log(err);
                return;
            }
            res(decode);
        })
    })
    
}

module.exports = {
    getSignToken,
    getVerifyToken,
    authenticateUser
}