const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'API documentation for Umurava challenge',
  },
  servers: [
    {
      url: 'https://umurave-api.onrender.com',
      description: 'producton  Server',
    },
  ],
  components: {
    schemas: {
      Challenge: {
        type: 'object',
        properties: {
          challengeTitle: { type: 'string', description: 'Title of the challenge' },
          deadline: { type: 'string', format: 'date-time', description: 'Deadline of the challenge' },
          duration: { type: 'string', format: 'date-time', description: 'Duration of the challenge' },
          moneyPrize: { type: 'string', description: 'Prize money for the challenge' },
          contactEmail: { type: 'string', description: 'Contact email for the challenge' },
          projectDescription: { type: 'string', description: 'Description of the project' },
          projectBrief: { type: 'string', description: 'Brief of the project' },
          projectDescriptionAndTasks: { type: 'string', description: 'Detailed tasks of the project' },
        },
      },
      Newsletter: {
        type: 'object',
        properties: {
          email: { type: 'string', description: 'Email address of the subscriber' },
        },
      },
      User: {
        type: 'object',
        properties: {
          userName: { type: 'string', description: 'Username of the user' },
          userEmail: { type: 'string', description: 'Email address of the user' },
          userPassword: { type: 'string', description: 'Password of the user' },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', '../Controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
