const router = require("express").Router();
const { stream } = require("../controllers/stream");

//Stream Route
router.get("/", stream);

module.exports = router;
