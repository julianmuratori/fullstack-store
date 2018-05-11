const express = require('express');
const router = express.Router();

router.get("/hello", (req, res) => {
    res.status(200).json({
        message: "this comes from routes/index"
    });
});

module.exports = router;