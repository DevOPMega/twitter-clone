const { getVerifyToken } = require("./lib/authentication");

async function tokenVerify(req, res, next) {
    try {
        if (req.cookies.token) {
            const user = await getVerifyToken(req.cookies.token);            
            if (user) {
                res.locals.user = user;
                return next()
            }
            // send json data
            return res.json({
                status: "ok",
                data: { message: "request token doesn't verify" }
            });
        }
        res.json({
            status: "ok",
            data: { message: "request doesn't have token" }
        });
    } catch(e) {
        console.error(e);
    }
}

module.exports = {
    tokenVerify
}