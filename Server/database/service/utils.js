const User = require("../Schemas/users");

const checkUserExistNot = async (email) => {
    try {
        const user = await User.findOne({ email });
        console.log(user);
        if (user) {
            return false;
        }
        return true;
    } catch(err) {
        console.log(err);
    }    
}

const checkUserExists = async (userId) => {
    try {
        const user = await User.findOne({ userId });
        console.log(user);
        if (user) {
            return user;
        }
        return false;
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    checkUserExistNot,
    checkUserExists
}