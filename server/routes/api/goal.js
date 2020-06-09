const router = require ('express').Router();
const goalController = require ('../../controllers/goalController');
 
router.route('/').post(goalController.create);
 
router.route('/username/:username').get(goalController.findAll);
 
router
.route('/:id')
.get(goalController.findById)
.put(goalController.update)
.delete(goalController.remove);
 
module.exports = router;