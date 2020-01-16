const express = require("express");
const router = express.Router();
const Artist = require("../../models/Artist");

// const artistsController = require("../../controllers/artistsController")

router.get("/", (req, res) => {

    console.log("hello")
    Artist.find({name: 'ryan', genre: 'hip-hop'}).then(r => res.json)
    Artist.find({}).then(dbResults => console.log("hello", dbResults))
    console.log("get artist")
})
// router.route("/")
//   .get(artistsController.findAll)
//   .post(artistsController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(artistsController.findById)
//   .put(artistsController.update)
//   .delete(artistsController.remove);

// module.exports = router;
module.exports = router;