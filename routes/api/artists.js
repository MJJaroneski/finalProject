const express = require("express");
const router = express.Router();
const Artist = require("../../models/Artist");

router.get("/", (req, res) => {
    Artist.find({name: 'ryan', genre: 'hip-hop'}).then(r => res.json)
    // Artist.find({}).then(dbResults => console.log("hello", dbResults))
    console.log("get artist")
})

module.exports = router;