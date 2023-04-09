import { Router } from 'express';
import MotorcycleControlle from '../Controllers/MotorcycleControlle';

const route = Router();
const url = '/motorcycles';

route.post(url, (req, res, next) => new MotorcycleControlle(req, res, next).add());
// route.get(url, (req, res, next) => new MotorcycleControlle(req, res, next).getAll(req, res));

export default route;
