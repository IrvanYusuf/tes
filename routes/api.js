const router = require("express").Router();
const authRoutes = require("./api/auth_routes.js");
const guestRoutes = require("./api/guest_routes.js");

router.use("/auths", authRoutes);
router.use("/guests", guestRoutes);

module.exports = router;
