import { Router } from 'express';
import CarController from '../Controllers/CarController';

const route = Router();
const url = '/cars';

route.post(url, (req, res, next) => new CarController(req, res, next).add());
route.get(url, (req, res, next) => new CarController(req, res, next).getAll(req, res));

export default route;
