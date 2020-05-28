const router = require ('express').Router();
const goalController = require ('../../controllers/goalController');


router.route('/').post(goalController.create);

router.route('/username/:username').get(goalController.findAll);

router.route('/:id');
router.get(goalController.findById);
router.put(goalController.update);
router.delete(goalController.remove);

module.exports = router;