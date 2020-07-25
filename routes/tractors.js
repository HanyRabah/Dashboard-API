const express = require('express');
const router = express.Router()
const { checkJwt, checkRole } = require('../controllers/auth');

const { getTractors, createTractor, getTractorById } = require('../controllers/tractors');

router.get('/tractors', getTractors);
router.get('/tractors/:id', getTractorById);
// Post
// checkRole('admin') Middleware to check if the user is admin which should be only the one to put data
router.post('/tractors/', checkJwt, createTractor);

module.exports = router
