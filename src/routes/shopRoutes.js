const express = require('express');
const router = express.Router();
const { shopView, itemView, cartView, itemAdd, cartAdd } = require("../controllers/shopControllers.js");

router.get("/", shopView);
router.get("/item/:id", itemView);
router.get("/cart", cartView);
router.post("/item/:id/add", itemAdd); //mission 6
router.post("/cart", cartAdd); //mission 6

module.exports = router;