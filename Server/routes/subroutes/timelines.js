const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
    res.send(req.originalUrl);
})

router.get("/tweet", (req, res) => {
    res.send(req.originalUrl);
})

module.exports = router;