const router = require('express').Router();
const userRoutes = require('./userRoutes');
const historyRoutes = require('./historyRoutes');
const guideRoutes = require('./guideRoutes');

router.use('/users', userRoutes);
router.use('/history', historyRoutes);
router.use('/guide', historyRoutes);

module.exports = router;
