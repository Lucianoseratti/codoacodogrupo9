const express = require('express');
const router = express.Router();
const { adminView, viewAdminCreate, viewAdminEdit, adminCreate, adminEdit, adminDelete } = require("../controllers/adminControllers.js");
const upload = require ('../middlewares/upload_middleware.js')




router.get("/", adminView);
router.get("/create", viewAdminCreate);
router.get("/edit/:id", viewAdminEdit);
router.post("/create", adminCreate); //mission 6
router.post("/edit/:id", upload.fields([{ name: 'imagenFront', maxCount: 1 }, { name: 'imagenBack', maxCount: 1 }]), adminEdit);  //mission 6
router.delete("/delete/:id", adminDelete); //mission 6

module.exports = router;