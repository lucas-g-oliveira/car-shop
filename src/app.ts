import express from 'express';
import carRoute from './Routes/CarRoutes';
/* import motoRoute from './Routes/MotorcycleRoutes'; */

const app = express();
app.use(carRoute);
/* app.use(motoRoute); */

export default app;
