const express = require("express");
const router = express.Router();

// utility functions
const { checkUserExists } = require("../database/service/utils");

// import routes
const follows = require("./subroutes/follows");
const like = require("./subroutes/like");
const retweets = require("./subroutes/retweets");
const timelines = require("./subroutes/timelines");

// follows router
router.use("/:userId", follows);
router.use("/:userId/likes", like);
router.use("/:userId/retweets", retweets);
router.use("/:userId/timelines", timelines);

// get user profile
router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;
    // check if user Id present in database 
    const user = await checkUserExists(userId);
    if (user) {
        return res.status(200).json({
            status: "ok",
            data: [{
                user: {
                    username: user.name,
                    userId: user.userId, 
                    bio: user.bio,
                    profileImg: user.imgUrl,
                    bannerImg: user.bannerImgUrl,
                    followers: user.followers?.count,
                    followings: user.following?.count, 
                    tweetsId: user.tweetsId,
                    likeTweetsId: user?.likeTweetsId
                }}
            ]
        })
    }
    res.status(404).json({
        status: "error",
        msg: "User Id not found"
    })
});

// update user profile
router.put("/:userId", (req, res) => {
    res.send("/update user");
});

// delete user profile
router.delete("/:userId", (req, res) => {
    res.send("/delete user")
});

module.exports = router;