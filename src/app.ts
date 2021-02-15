import express from 'express';
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { MONGODB_URI } from './util/secrets';
import errorMiddleware from './middleware/error';
import * as userController from './controllers/user';

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
  })
  .catch((err) => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
  });

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());

/**
 * routes.
 */
app.get('/user/:id', userController.getUserById);

app.use(errorMiddleware);

export default app;
