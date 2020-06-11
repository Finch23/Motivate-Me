const router = require('express').Router();

router.get('/config', (req, res) => {
    res.json({config: { key: process.env.GOOGLE_API_KEY }});
});


module.exports = router;