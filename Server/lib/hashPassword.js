const bcrypt = require("bcrypt");
const saltRounds = 10;

function getHashPassword(password) {
    return new Promise((res, rej) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                rej(err);
            }
            res(hash);
        })
    })
}

function compareHashPassword(password, hashPassword) {
    return new Promise((res, rej) => {
        bcrypt.compare(password, hashPassword, (err, same) => {
            if(err) {
                rej(false);
            }
            res(same);
        })
    })
}


module.exports = {
    getHashPassword,
    compareHashPassword
}