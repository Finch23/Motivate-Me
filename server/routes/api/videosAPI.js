const router = require('express').Router();
const axios = require ('axios');
const API_KEY = process.env.REACT_APP_API_KEY;

/*
router.get('/', (res, err) => {
    console.log('Logged from quotesAPI file from server')

    axios.get({
        baseURL: 'https://www.googleapis.com/youtube/v3/search?key=${API_KEY}'
        })
        .then((data)=>{
            res.send(data)
        console.log(res)
        })
        .catch((err)=>{
        console.log(err)
        })
});*/

router.get('/config', (req, res) => {
    res.json({config: { key: process.env.GOOGLE_API_KEY }});
});


module.exports = router;