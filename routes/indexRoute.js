const express = require("express");
const router = express();

const { getIndex } = require("../controllers/indexController.js");

router.get("/", getIndex);

module.exports = router;
