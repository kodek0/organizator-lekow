const express = require('express');
const router = express.Router();
const drugActions = require('../actions/api/drugActions');

router.get('/drugs', drugActions.getAllDrugs);
router.get('/drugs/:id', drugActions.getDrug);
router.post('/drugs', drugActions.saveDrug);
router.put('/drugs/:id', drugActions.updateDrug);
router.delete('/drugs/:id', drugActions.deleteDrug);

module.exports = router;