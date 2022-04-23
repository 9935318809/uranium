const express = require('express');

const router = express.Router();

const developerController = require("../controller/developerController")

const batchController = require('../controller/batchController')


router.post('/create_batch',batchController.createBatch)
router.post('/create_developer',developerController.create)
router.get("/batches",batchController.getBatches)
router.get("/scholarship-developers",developerController.getScholarshipDeveloper)
router.get("/developers",developerController.getDeveloperByPP)
router.get('/get_all_developers',developerController.getAllDevelopers)

module.exports = router;
// adding this comment for no reason