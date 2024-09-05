import express from 'express';
import bodyParser from 'body-parser';

import swaggerUi from 'swagger-ui-express';
import cookieParser from 'cookie-parser';


// Import routes
import userRouter from './src/features/user/user.routes.js';
import jobRouter from './src/features/jobs/job.routes.js';
import likeRouter from './src/features/like/like.routes.js';

// Import middleware
import { auth } from './src/middlewares/jwtAuth.js';

// Import Swagger documentation
import apiDocs from './swagger.json' assert { type: 'json' };

// Create server
const server = express();

// CORS policy configuration
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5500');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  // Return OK for preflight request
  if (req.method == "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Middleware
server.use(bodyParser.json());
server.use(cookieParser());

// Serve Swagger API docs
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocs));

// Define routes
server.use('/api/users', userRouter);
server.use('/api/jobs', auth, jobRouter);
server.use('/api/likes', auth, likeRouter);

// Default request handler
server.get('/', (req, res) => {
  res.send("Welcome to Job API");
});

// Middleware to handle 404 requests
server.use((req, res) => {
  res.status(404).send("API not found. Please check our documentation for more information at http://localhost:3000/api-docs");
});

// Error handling middleware
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Specify port
const PORT = process.env.PORT || 3507;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});