const router = require('express').Router();
const axios = require ('axios');
const API_KEY = process.env.REACT_APP_QUOTES_API_KEY;


router.get('/', (res, err) => {
    console.log('Logged from quotesAPI file from server')

    axios({
        "method":"GET",
        "url":"https://quotes15.p.rapidapi.com/quotes/random/",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"quotes15.p.rapidapi.com",
        "x-rapidapi-key":API_KEY,
        "useQueryString":true
        },"params":{
        "language_code":"en"
        }
        })
        .then((res)=>{
        console.log(res)
        })
        .catch((err)=>{
        console.log(err)
        })
    // axios.get("https://quotes15.p.rapidapi.com/quotes/random/", { params: req.query }).then(({ data: {results } }) => res.json(results)).catch(err => res.status(111).json(err))
})


module.exports = router;