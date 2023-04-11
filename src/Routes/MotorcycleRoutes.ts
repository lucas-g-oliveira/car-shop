import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleControlle';

const route = Router();
const url = '/motorcycles';

route.post(url, (req, res, next) => new MotorcycleController(req, res, next).add());
route.get(url, (req, res, next) => new MotorcycleController(req, res, next).getAll());
route.get(`${url}/:id`, (req, res, next) => new MotorcycleController(req, res, next).getOneById());
route.put(`${url}/:id`, (req, res, next) => new MotorcycleController(req, res, next).update());

export default route;
