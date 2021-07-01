const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cardRoutes = require('./cardRoutes');
const setRoutes  = require('./setRoutes');

router.use('/user', userRoutes);
router.use('/card', cardRoutes);
router.use('/set', setRoutes);

module.exports = router;