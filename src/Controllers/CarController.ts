import { Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private _carService:CarService;

  constructor() {
    this._carService = new CarService();
  }

  async add(req: Request, res: Response) {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = req.body;
    const car:ICar = { model, year, color, status: status || false, buyValue, doorsQty, seatsQty };
    // const car:ICar = { ...req.body, status: (req.body.status || false) };
    const data = await this._carService.add(car);
    return res.status(201).json(data);
  }
/*   async getAll(req: Request, res: Response) {
    const data = await this._carService.findAll();
    return res.status(200).json(data);
  }
  async update(req: Request, res: Response) {
    const data = await this._carService.update(Number(req.params.id), req.body);
    return res.status(200).json({ data });
  } */
}
