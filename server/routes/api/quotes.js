const router = require ('express').Router();
const quotesController = require ('../../controllers/quotesController');

router.route('/').post(quotesController.create);
router.route('/username/:username').get(quotesController.findAll);

router.routes('/:id');
router.get(quotesController.findById);
router.delete(quotesController.remove);

module.exports = router;