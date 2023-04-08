import { Router, Request, Response } from 'express';
import CarController from '../Controllers/CarController';
// import Vehicle from '../Domains/Vehicle';

const route = Router();

const url = '/cars';

// const classVehicle = new Vehicle(objCar);
const controller = new CarController();

route.post(url, async (req: Request, res: Response) => controller.add(req, res));
route.get(url, async (req: Request, res: Response) => controller.getAll(req, res));
/* route.put(`${url}/:id`, async (req: Request, res: Response) => controller.update(req, res)); */

export default route;
