const mongoose = require("mongoose");

// Tweets Schema 
const tweetSchema = new mongoose.Schema({
    tweetId: {type: String, require: true},
    userId: { type: String, require: true}, 
    body: {
        type: String, require: true, minLength: 1,  maxLength: 200
    }, 
    createdAt: {type: Date, default: Date.now}, 
    like: {type: Number, default: 0},
    retweets: {type: Number, default: 0},
    likeId : [{type: String}],
    hashtags : [{type: String}],
    imgUrl: String, 
    comments: []
});

const Tweets = mongoose.model("Tweet", tweetSchema);

module.exports = Tweets;