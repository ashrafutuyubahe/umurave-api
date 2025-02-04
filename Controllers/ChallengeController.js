// controllers/challengeController.js

const { response } = require("express");
const Challenge = require("../Models/challenge");



exports.createChallenge = async (req, res) => {
  try {
    const {
      challengeTitle,
      deadline,
      duration,
      moneyPrize,
      contactEmail,
      projectDescription,
      projectBrief,
      projectDescriptionAndTasks,
    } = req.body;
  
    findChallengeExist=   Challenge.findOne({challengeTitle,projectBrief,projectDescriptionAndTasks});

    if(findChallengeExist){
      return res.status(409).json({
        message:"challenge already exits"
      });
    }
    
    const newChallenge = await Challenge.create({
      challengeTitle,
      deadline,
      duration,
      moneyPrize,
      contactEmail,
      projectDescription,
      projectBrief,
      projectDescriptionAndTasks,
    });

    res.status(201).json({
      message: "Challenge created successfully",
      data: newChallenge,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating challenge", error });
  }
};



exports.getAllChallenges = async (req, res) => {
  try {
    
    const challenges = await Challenge.find();
    res.status(200).json(challenges);
  } catch (error) {
    res.status(500).json({ message: "Error fetching challenges", error });
  }
};



exports.getChallengeById = async (req, res) => {
  try {
    const { id } = req.params;
    const challenge = await Challenge.findById(id);

    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    res.status(200).json(challenge);
  } catch (error) {
    res.status(500).json({ message: "Error fetching challenge", error });
  }
};



exports.updateChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      challengeTitle,
      deadline,
      duration,
      moneyPrize,
      contactEmail,
      projectDescription,
      projectBrief,
      projectDescriptionAndTasks,
    } = req.body;

    const updatedChallenge = await Challenge.findByIdAndUpdate(
      id,
      {
        challengeTitle,
        deadline,
        duration,
        moneyPrize,
        contactEmail,
        projectDescription,
        projectBrief,
        projectDescriptionAndTasks,
      },
      { new: true }
    );

    if (!updatedChallenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    res.status(200).json({
      message: "Challenge updated successfully",
      data: updatedChallenge,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating challenge", error });
  }
};



exports.deleteChallenge = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedChallenge = await Challenge.findByIdAndDelete(id);

    if (!deletedChallenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    res.status(200).json({ message: "Challenge deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting challenge", error });
  }
};
