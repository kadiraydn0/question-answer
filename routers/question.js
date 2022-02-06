const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    res.send("Question home page.");
});

router.get("/answer", (req, res) => {

    res.send("Question answer page.");
});

module.exports = router;