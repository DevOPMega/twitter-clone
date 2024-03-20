const express = require("express");
const router = express.Router({mergeParams: true});

// utility functions 
const { getFollowersId, getFollowingsId, followUser, unfollowUser } = require("../../database/service/user");
const { authenticateUser } = require("../../lib/authentication")

// get user followers
router.get("/followers", async (req, res) => {
    const {userId} = req.params;
    console.log(req.params);
    const followers = await getFollowersId(userId);
    if (followers) {
        return res.status(200).json({
            status: "ok",
            data: [
                {
                    followers
                }
            ]
        })
    }
    res.status(401).json({
        status: "error",
        msg: "User doesn't exists"
    })
});

// get user followings
router.get("/followings", async (req, res) => {
    const {userId} = req.params;
    const followings = await getFollowingsId(userId);
    if (followings) {
        return res.status(200).json({
            status: "ok",
            data: [
                {
                    followings
                }
            ]
        })
    }
    res.status(401).json({
        status: "error",
        msg: "User doesn't exists"
    })
})

// follow user
router.put("/following", authenticateUser,  async (req, res) => {
    const userId = req.userId;
    const {userId: targetUserId} = req.params;
    const followSuccessful = await followUser(userId, targetUserId);
    if (followSuccessful) {
        return res.status(200).json({
            status: "ok",
            data: [
                {
                    msg: "Following successful"
                }
            ]
        })
    }
    res.status(401).json({
        status: "error",
        msg: "User doesn't exists"
    })
});

// unfollow user
router.delete("/following", authenticateUser, async (req, res) => {
    const userId = req.userId;
    const {userId: targetUserId} = req.params;
    const unfollowSuccessful = await unfollowUser(userId, targetUserId);
    if (unfollowSuccessful) {
        return res.status(200).json({
            status: "ok",
            data: [
                {
                    msg: "Unfollowing successful"
                }
            ]
        })
    }
    res.status(401).json({
        status: "error",
        msg: "User doesn't exists"
    })
})

module.exports = router;