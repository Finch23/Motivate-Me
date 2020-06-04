const router = require ('express').Router();
const goalRoutes = require ('./goal');
const favesRoutes = require ('./faves')
const quotesRoutes = require ('./quotes');
const quotesAPIRoutes = require ('./quotesAPI');


router.use('/goals', goalRoutes);
router.use('/faves', favesRoutes);
router.use('/quotes', quotesRoutes);
goalRoutes.use('/quotesapi', quotesAPIRoutes);

module.exports = router;