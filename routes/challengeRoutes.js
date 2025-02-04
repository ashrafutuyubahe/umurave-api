// routes/challengeRoutes.js

const express = require("express");
const router = express.Router();

const challengeController = require("../Controllers/ChallengeController");

/**
 * @swagger
 * tags:
 *   name: Challenges
 *   description: API for managing challenges
 */

/**
 * @swagger
 * /api/v1/create:
 *   post:
 *     summary: Create a new challenge
 *     description: Creates a new challenge with the provided details.
 *     tags: [Challenges]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               challengeTitle:
 *                 type: string
 *                 example: "Coding Challenge"
 *               deadline:
 *                 type: string
 *                 format: date
 *                 example: "2025-05-01"
 *               duration:
 *                 type: string
 *                 example: "48 hours"
 *               moneyPrize:
 *                 type: number
 *                 example: 5000
 *               contactEmail:
 *                 type: string
 *                 example: "user@example.com"
 *               projectDescription:
 *                 type: string
 *                 example: "Solve programming problems."
 *               projectBrief:
 *                 type: string
 *                 example: "A coding challenge for developers."
 *               projectDescriptionAndTasks:
 *                 type: string
 *                 example: "Complete five tasks in 48 hours."
 *     responses:
 *       201:
 *         description: Challenge created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Challenge created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     challengeTitle:
 *                       type: string
 *                     deadline:
 *                       type: string
 *                     duration:
 *                       type: string
 *                     moneyPrize:
 *                       type: number
 *                     contactEmail:
 *                       type: string
 *                     projectDescription:
 *                       type: string
 *                     projectBrief:
 *                       type: string
 *                     projectDescriptionAndTasks:
 *                       type: string
 *       400:
 *         description: Bad request, missing required fields
 *       409:
 *         description: Challenge already exists
 *       500:
 *         description: Internal server error
 */
router.post("/create", challengeController.createChallenge);

/**
 * @swagger
 * /api/v1/get-all:
 *   get:
 *     summary: Get all challenges
 *     description: Returns a list of all available challenges.
 *     tags: [Challenges]
 *     responses:
 *       200:
 *         description: List of challenges retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "64c9f4d5a9c7b9e1b2d3f6e7"
 *                   challengeTitle:
 *                     type: string
 *                     example: "Coding Challenge"
 *                   deadline:
 *                     type: string
 *                     example: "2025-05-01"
 *                   duration:
 *                     type: string
 *                     example: "48 hours"
 *                   moneyPrize:
 *                     type: number
 *                     example: 5000
 *                   contactEmail:
 *                     type: string
 *                     example: "user@example.com"
 *                   projectDescription:
 *                     type: string
 *                     example: "Solve programming problems."
 *                   projectBrief:
 *                     type: string
 *                     example: "A coding challenge for developers."
 *                   projectDescriptionAndTasks:
 *                     type: string
 *                     example: "Complete five tasks in 48 hours."
 *       500:
 *         description: Internal server error
 */
router.get("/get-all", challengeController.getAllChallenges);

/**
 * @swagger
 * /api/v1/get-single-challenge/{id}:
 *   get:
 *     summary: Get a single challenge
 *     description: Retrieves details of a specific challenge by its ID.
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the challenge to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Challenge details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 challengeTitle:
 *                   type: string
 *                   example: "Coding Challenge"
 *                 deadline:
 *                   type: string
 *                   example: "2025-05-01"
 *                 duration:
 *                   type: string
 *                   example: "48 hours"
 *                 moneyPrize:
 *                   type: number
 *                   example: 5000
 *                 contactEmail:
 *                   type: string
 *                   example: "user@example.com"
 *                 projectDescription:
 *                   type: string
 *                   example: "Solve programming problems."
 *                 projectBrief:
 *                   type: string
 *                   example: "A coding challenge for developers."
 *                 projectDescriptionAndTasks:
 *                   type: string
 *                   example: "Complete five tasks in 48 hours."
 *       404:
 *         description: Challenge not found
 *       500:
 *         description: Internal server error
 */
router.get("/get-single-challenge/:id", challengeController.getChallengeById);

/**
 * @swagger
 * /api/v1/update-challenge/{id}:
 *   put:
 *     summary: Update a challenge
 *     description: Updates the details of an existing challenge by its ID.
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the challenge to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               challengeTitle:
 *                 type: string
 *               description:
 *                 type: string
 *               difficulty:
 *                 type: string
 *     responses:
 *       200:
 *         description: Challenge updated successfully
 *       400:
 *         description: Bad request, invalid data
 *       404:
 *         description: Challenge not found
 *       500:
 *         description: Internal server error
 */
router.put("/update-challenge/:id", challengeController.updateChallenge);

/**
 * @swagger
 * /api/v1/delete-challenge/{id}:
 *   delete:
 *     summary: Delete a challenge
 *     description: Deletes an existing challenge by its ID.
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the challenge to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Challenge deleted successfully
 *       404:
 *         description: Challenge not found
 *       500:
 *         description: Internal server error
 */
router.delete("/delete-challenge/:id", challengeController.deleteChallenge);

module.exports = router;
