const express = require('express');
const router = express.Router();

router.use('/country', require('./countryroutes'));


module.exports = router;
