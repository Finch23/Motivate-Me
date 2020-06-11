const router = require('express').Router();
const axios = require ('axios');


router.get('/config', (req, res) => {
    res.json({config: { key: process.env.GOOGLE_API_KEY }});
});


module.exports = router;