const Router = require('express');
const NotesController = require('../controllers/notes');

const router = new Router();

router.post('/create', NotesController.create);
router.get('/list', NotesController.getList);

module.exports = router;
