/**
 * @swagger
 * tags:
 *   name: Newsletter
 *   description: API for managing newsletter subscriptions
 */

/**
 * @swagger
 * /newsletter/subscribe:
 *   post:
 *     summary: Subscribe to the newsletter
 *     description: Allows users to subscribe to the newsletter by providing their email.
 *     tags: [Newsletter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *     responses:
 *       200:
 *         description: Subscription successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Successfully subscribed to the newsletter."
 *       400:
 *         description: Invalid request, email is missing or invalid
 *       500:
 *         description: Internal server error
 */
