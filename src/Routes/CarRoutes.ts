import { Router } from 'express';
import CarController from '../Controllers/CarController';

const route = Router();
const url = '/cars/';

route.post(url, (req, res, next) => new CarController(req, res, next).add());
route.get(url, (req, res, next) => new CarController(req, res, next).getAll());
route.get(`${url}:id`, (req, res, next) => new CarController(req, res, next).getOneById());
route.put(`${url}:id`, (req, res, next) => new CarController(req, res, next).update());

export default route;
