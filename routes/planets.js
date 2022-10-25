// Require express 
const express = require('express')

const {mercuryView, venusView, earthView, marsView, jupiterView, saturnView, uranusView, neptuneView} = require('../controllers/planetController')

// The express router function
const router = express.Router()

router.get('/', earthView)

router.get('/earth', earthView)

router.get('/mercury', mercuryView)

router.get('/venus',venusView)

router.get('/mars', marsView)

router.get('/jupiter', jupiterView)

router.get('/saturn', saturnView)

router.get('/uranus', uranusView)

router.get('/neptune', neptuneView)

module.exports = router