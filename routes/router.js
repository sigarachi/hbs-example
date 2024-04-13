const Router = require('express');
const NotesRouter = require('./notes');

const router = new Router();

router.use('/notes', NotesRouter);

module.exports = router;
