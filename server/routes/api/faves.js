const router = require('express').Router();
const favesController = require('../../controllers/favesController');
 
router.route('/').post(favesController.create);
 
router.route('/username/:username').get(favesController.findAll);
 
router
.route('/:id')
.get(favesController.findById)
.put(favesController.update)
.delete(favesController.remove);
 
module.exports = router;