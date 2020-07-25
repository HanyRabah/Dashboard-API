const express = require('express');
const router = express.Router()
const { checkJwt, checkRole } = require('../controllers/auth');

const { getProcess, createProcess, getProcessById } = require('../controllers/process');

router.get('/process', getProcess);
router.get('/process/:id', getProcessById);
// Post
// checkRole('admin') Middleware to check if the user is admin which should be only the one to put data
router.post('/process/', checkJwt, createProcess);


module.exports = router
