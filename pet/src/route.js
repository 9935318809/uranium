const express = require('express');
const router = express.Router();

const petController = require("./controller");

router.post('/pet', petController.petregistration);
router.get('/pet', petController.getPet);
router.get('/getPetById/:petId', petController.getPetById);
router.put('/updatePetById/:petId', petController.updatePetById);
router.delete('/deletePetById/:petId', petController.DeletePet);


module.exports =  router; 