const router = require ('express').Router();
const goalRoutes = require ('./goal');
const favesRoutes = require ('./faves')
const videosAPIRoutes = require ('./videosAPI');


router.use('/goal', goalRoutes);
router.use('/faves', favesRoutes);
router.use('/videosapi', videosAPIRoutes);

module.exports = router;