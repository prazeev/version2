var express = require('express');
var router = express.Router();
var controller = require('../controllers/SpaceController');

router.get('/space',controller.get_all_spaces);
router.post('/space',controller.add_space);

router.get('/space/:spaceId',controller.get_space)
router.delete('/space/delete/:spaceId',controller.delete_space)



module.exports = router
