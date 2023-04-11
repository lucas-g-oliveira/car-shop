import express, { json } from 'express';
import carRoute from './Routes/CarRoutes';
import motoRoute from './Routes/MotorcycleRoutes';
import errorHandler from './Middleware/errors';

const app = express();
app.use(json());
app.use(carRoute);
app.use(motoRoute);
app.use(errorHandler);

export default app;
