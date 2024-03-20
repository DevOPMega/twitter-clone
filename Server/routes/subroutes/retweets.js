const express = require("express");
const router = express.Router();

// get retweets of tweet
router.get("/", (req, res) => {
    res.send(req.originalUrl);
});

// retweet a tweet 
router.post("/", (req, res) => {
    res.send(req.originalUrl);
});

// undo a retweet 
router.delete("/:tweetId", (req, res) => {
    res.send(req.originalUrl);
})

module.exports = router;