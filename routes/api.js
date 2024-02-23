const router = require("express").Router();
const guestRoutes = require("./api/guest_routes.js");

router.use("/guests", guestRoutes);

module.exports = router;
