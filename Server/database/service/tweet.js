const { v4: uuidv4 } = require("uuid");
const { mongoose } = require("mongoose");
const Tweets = require("../Schemas/tweets");
const Users = require("../Schemas/users");

// Post the tweet 
const postTweet = async (userId, tweetInfo) => {
    const { body, hashtags } = tweetInfo;

    // break hashtags 
    const hashtagArray = hashtags.split(" ");

    // generate uuid 
    const tweetId = uuidv4();

    try {
        const tweet = new Tweets({
            tweetId,
            userId,
            body,
            like: 0,
            retweets: 0,
            hashtags: hashtagArray
        });

        const ObjectId = new mongoose.Types.ObjectId(tweet.id);

        await Users.findOneAndUpdate({
            userId
        }, {
            $push: {
                tweetsId: ObjectId
            }
        })

        await tweet.save();
        return tweet;
    } catch (err) {
        console.log(err);
    }
};


// Get the tweet of given tweet id
const getTweet = async (tweetId) => {
    try {
        const tweet = await Tweets.findOne({ tweetId });
        if (tweet) {
            return tweet;
        }
        return false;
    } catch (e) {
        console.log(e);
    }
}


// Get the liked user of the given tweet
const getTweetLikingUsers = async (tweetId) => {
    try {
        const tweet = await Tweets.findOne({ tweetId });
        if (tweet) {
            const tweetLikeIds = tweet.likeId;
            return tweetLikeIds;
        }
        else {
            return false;
        }
    } catch (e) {
        console.log(e);
    }
}


// delete the tweet of the user 
const deleteTweet = async (tweetId) => {
    try {
        const doc = await Tweets.deleteOne({ tweetId });
        if (doc.deletedCount === 1) {
            return true
        }
        return false;
    } catch (e) {
        console.log(e);
    }
}



module.exports = {
    postTweet,
    getTweet,
    getTweetLikingUsers,
    deleteTweet
};
