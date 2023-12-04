const express = require('express');
const router = express.Router();
const { adminView, viewAdminCreate, viewAdminEdit, adminCreate, adminEdit, adminDelete } = require("../controllers/adminControllers.js");

router.get("/", adminView);
router.get("/create", viewAdminCreate);
router.get("/edit/:id", viewAdminEdit);
router.post("/create", adminCreate); //mission 6
router.put("/edit/:id", adminEdit);  //mission 6
router.delete("/delete/:id", adminDelete); //mission 6

module.exports = router;