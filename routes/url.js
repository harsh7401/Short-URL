const express = require('express');
const {hanleGenrateNewShortURL} = require("../controllers/url");
const router = express.Router();

router.post('/',hanleGenrateNewShortURL);

module.exports = router;