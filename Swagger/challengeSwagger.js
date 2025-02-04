/**
 * @swagger
 * tags:
 *   name: Challenges
 *   description: API for managing challenges
 */

/**
 * @swagger
 * /challenges/create:
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
 *               title:
 *                 type: string
 *                 example: "Coding Challenge"
 *               description:
 *                 type: string
 *                 example: "Solve 5 programming problems in 24 hours."
 *               difficulty:
 *                 type: string
 *                 enum: [easy, medium, hard]
 *                 example: "medium"
 *     responses:
 *       201:
 *         description: Challenge created successfully
 *       400:
 *         description: Bad request, missing required fields
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /challenges/get-all:
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
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   difficulty:
 *                     type: string
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /challenges/get-single-challenge/{id}:
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
 *       404:
 *         description: Challenge not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /challenges/update-challenge/{id}:
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
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               difficulty:
 *                 type: string
 *                 enum: [easy, medium, hard]
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

/**
 * @swagger
 * /challenges/delete-challenge/{id}:
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

