const router = require ('express').Router();
const goalRoutes = require ('./goal');
const quotesRoutes = require ('./quotes');


router.use('/goals', goalRoutes);
router.use('/quotes', quotesRoutes);


module.exports = router;