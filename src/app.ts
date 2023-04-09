import express, { json } from 'express';
import carRoute from './Routes/CarRoutes';
/* import motoRoute from './Routes/MotorcycleRoutes'; */

const app = express();
app.use(json());
app.use(carRoute);
/* app.use(motoRoute); */

export default app;
