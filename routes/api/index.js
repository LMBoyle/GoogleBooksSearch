// Dependencies ===================================================================================

const router = require("express").Router();
const bookRoutes = require("./books");

// Routes =========================================================================================

// Book routes
router.use("/books", bookRoutes);

// Export =========================================================================================

module.exports = router;
