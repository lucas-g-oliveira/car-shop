import { Router, Request, Response } from 'express';
import MotorcycleControlle from '../Controllers/MotorcycleControlle';
// import Vehicle from '../Domains/Vehicle';

const route = Router();

const url = '/motorcycler';
// const classVehicle = new Vehicle(objMotorcycler);
const controller = new MotorcycleControlle();

route.post(url, async (req: Request, res: Response) => controller.add(req, res));
/* route.get(url, async (req: Request, res: Response) => controller.getAll(req, res));
route.put(`${url}/:id`, async (req: Request, res: Response) => controller.update(req, res));
route.delete(`${url}/:id`, async (req: Request, res: Response) => controller.delete(req, res)); */

export default route;
