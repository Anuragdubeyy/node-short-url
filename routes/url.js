const express = require("express");
const {handleGenerateNewShortUrl, handleGetAnalyticsUrl} = require("../controllers/url");
const router = express.Router();

router.post("/" , handleGenerateNewShortUrl);

router.get("/analytics/:shortId", handleGetAnalyticsUrl)

module.exports = router;