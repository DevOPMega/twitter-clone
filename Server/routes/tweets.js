const express = require("express");
const router = express.Router();

// utility functions 
const { postTweet, getTweet, getTweetLikingUsers, deleteTweet } = require("../database/service/tweet")
const validateTweet = require("../lib/validateTweet");
const { authenticateUser } = require("../lib/authentication");

// import routes
const retweets = require("./subroutes/retweets");

// retweets router
router.use("/:userId/retweets", retweets);

// post tweet
router.post("/", authenticateUser, async (req, res) => {
    const tweetInfo = req.body; 
    // validate the tweet 
    if (validateTweet(tweetInfo)) {
        const tweet = await postTweet(req.userId, tweetInfo);
        return res.status(200).json({
            status: "ok",
            data: [tweet]
        })
    }
    res.status(401).json({
        status: "error",
        msg: "Input validation error"
    })
});

// get tweet 
router.get("/:tweetId", authenticateUser, async (req, res) => {
    const {tweetId} = req.params;
    const tweet = await getTweet(tweetId);
    if (tweet) {
        console.log(req.user);
        return res.status(200).json({
            status: "ok",
            data: [{
                tweet
            }]
        });
    }
    res.status(401).json({
        status: "error",
        msg: "Cannot find tweet with given Tweet Id"
    });
});

// get tweet liking users 
router.get("/:tweetId/likes", authenticateUser, async (req, res) => {
    const { tweetId } = req.params; 
    const tweetLikeUserIds = await getTweetLikingUsers(tweetId);
    if (tweetLikeUserIds) {
        return res.status(200).json({
            status: "ok",
            data: [
                {tweetLikeUserIds}
            ]
        })
    }
    res.status(401).json({
        status: "error",
        msg: "Couldn't find tweet with given tweet ID"
    })
})

// delete a tweet
// Todo: delete only user it's own tweets
router.delete("/:tweetId", authenticateUser, async (req, res) => {
    const { tweetId } = req.params;
    const deleteInfo = await deleteTweet(tweetId);

    if (deleteInfo) {
        return res.status(200).json({
            status: "ok"
        })
    } 
    res.status(401).json({
        status: "error",
        msg: "Given tweet Id not matched successfully"
    })
    
})

module.exports = router;