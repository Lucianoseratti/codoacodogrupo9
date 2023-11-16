const express = require('express');
const router = express.Router();
const { adminView, viewAdminCreate, viewAdminEdit, adminCreate, adminEdit, adminDelete } = require("../controllers/adminControllers.js");

router.get("/", adminView);
router.get("/create", viewAdminCreate);
router.get("/edit/:id", viewAdminEdit);
router.post("/create", adminCreate);
router.put("/edit/:id", adminEdit);
router.delete("/delete/:id", adminDelete);

module.exports = router;