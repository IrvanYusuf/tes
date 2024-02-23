const guestController = require("../../controllers/guest.js");
const router = require("express").Router();

router.get("/", guestController.getAll);

module.exports = router;
