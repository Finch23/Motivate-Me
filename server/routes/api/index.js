const router = require ('express').Router();
const goalRoutes = require ('./goal');
const quotesRoutes = require ('./quotes');


router.use('/goal', goalRoutes);
router.use('/quotes', quotesRoutes);


module.exports = router;