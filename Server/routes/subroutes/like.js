const express = require("express");
const router = express.Router();

// get user liked tweets
router.get("/", (req, res) => {
    res.send(req.originalUrl);
});

// like a tweet
router.post("/", (req, res) => {
    res.send(req.originalUrl);
})

// unlike a tweet
router.delete("/:tweetId", (req, res) => {
    res.send(req.originalUrl);
})

module.exports = router;