const router = require ('express').Router();
const goalRoutes = require ('./goal');
const favesRoutes = require ('./faves')
// const quotesRoutes = require ('./quotes');
const videosAPIRoutes = require ('./videosAPI');


router.use('/goal', goalRoutes);
router.use('/faves', favesRoutes);
// router.use('/quotes', quotesRoutes);
router.use('/videosapi', videosAPIRoutes);

module.exports = router;