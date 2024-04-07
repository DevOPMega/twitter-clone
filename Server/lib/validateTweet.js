const { z } = require("zod");

const validateTweet = (tweet) => {
    for(let field in tweet) {        
        if (tweet[field] === ""){
            return false;
        }
    }
    return true;
}

module.exports = validateTweet;