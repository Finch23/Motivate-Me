const router = require ('express').Router();
const quotesController = require ('../../controllers/quotesController');
const goalController = require ('../../controllers/goalController');

router.route('/')
    .post(quotesController.create);

router.route('/username/:username').get(quotesController.findAll);

router
.route('/:id')
.get(quotesController.findById)
.put(goalController.update)
.delete(quotesController.remove);

module.exports = router;