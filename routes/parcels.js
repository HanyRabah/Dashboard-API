const express = require('express');
const router = express.Router()
const { checkJwt, checkRole } = require('../controllers/auth');

const { getParcels,  createParcel, getParcelById } = require('../controllers/parcels');

router.get('/parcels', getParcels);
router.get('/parcels/:id', getParcelById);
// Add
// checkRole('admin') Middleware to check if the user is admin which should be only the one to put data
router.post('/parcels/', checkJwt, createParcel);

module.exports = router
