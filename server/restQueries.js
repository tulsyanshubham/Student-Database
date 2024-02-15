const express = require("express");
const router = express.Router();
module.exports = router;

router.post("/post", async (req, res) => {
    console.log(req.body);
});