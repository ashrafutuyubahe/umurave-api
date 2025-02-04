
const express = require("express");
const router = express.Router();



const challengeController= require("../Controllers/ChallengeController")


router.post("/create", challengeController.createChallenge);


router.get("/get-all", challengeController.getAllChallenges);


router.get("/get-single-challenge/:id", challengeController.getChallengeById);


router.put("/update-challenge/:id", challengeController.updateChallenge);


router.delete("/delete-challenge/:id", challengeController.deleteChallenge);

module.exports = router;
