const router = require('express').Router();
const favesController = require('../../controllers/favesController');

router.route('/').post(favesController.create);

router.route('/username/:username').get(favesController.findAll);

router.route('/:id');
router.get(favesController.findById);
router.put(favesController.update);
router.delete(favesController.remove);

module.exports = router;