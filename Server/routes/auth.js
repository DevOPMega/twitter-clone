const express = require("express");

// utility functions
const { compareHashPassword } = require("../lib/hashPassword");
const validateUser = require("../lib/validateUser");
const { register } = require("../database/service/user");
const { checkUserExistNot, checkUserExists } = require("../database/service/utils");
const { getSignToken, getVerifyToken } = require("../lib/authentication");

const router = express.Router();

// register new user
router.post("/register", async (req, res) => {
    const userinfo = req.body;
    // validate user firstname, lastname, email and password 
    if (validateUser(userinfo)) {
        // check in database if user pre exist or not (true: not exist false: exist)
        const check = await checkUserExistNot(userinfo.email);
        if (!check) {
            // user exist cannot be register again
            return res.status(401).json({ status: "error", msg: "User exists" });
        }

        // register the user in the database
        const user = await register(userinfo);

        // generate the token for user
        const token = getSignToken(user);

        // populate the token in cookies
        res.cookie("token", token, {
            expires: new Date(Date.now() + 8 * 60 * 60 * 1000)
        });

        // send json data
        return res.json({
            status: "ok",
            data: [{ user: { username: user.name, email: user.email, userId: user.userId } }]
        });
    }
    // input validation error
    res.status(401).json({ status: "error", msg: "Input validation error" });
});

// login user
router.post("/login", async (req, res) => {
    const userinfo = req.body;
    console.log(userinfo);
    if (validateUser(userinfo)) {
        // check in database if user exist or not 
        try {
            const user = await checkUserExists(userinfo.userId);
            if (user) {
                // check the password 
                const verifyPassword = await compareHashPassword(userinfo.password, user.password);

                if (verifyPassword) {
                    // generate the token for user
                    const token = getSignToken(user);

                    // populate the token in cookies
                    res.cookie("token", token, {
                        expires: new Date(Date.now() + 8 * 60 * 60 * 1000)
                    });

                    return res.status(200).json({
                        status: "ok",
                        data: [{ user: { username: user.name, email: user.email, userId: user.userId } }]
                    });
                }

                // Password is wrong
                return res.status(401).json({
                    status: "error",
                    msg: "Password is wrong"
                });
            }
            // User doesn't exists
            return res.status(401).json({
                status: "error",
                msg: "User doesn't exists"
            });

        } catch (e) {
            console.error(e);
        }

    }
    // input validation error
    return res.status(401).json({
        status: "error",
        msg: "Input validation error"
    });
});

module.exports = router;