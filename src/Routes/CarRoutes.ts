import { Router, Request, Response } from 'express';
import CarController from '../Controllers/CarController';

const route = Router();
const url = '/cars';

route.post(url, async (req: Request, res: Response) => new CarController(req, res).add());
/* route.get(url, async (req: Request, res: Response) => new CarController(req, res).getAll(req, res)); */
/* route.put(`${url}/:id`, async (req: Request, res: Response) => controller.update(req, res)); */

export default route;
