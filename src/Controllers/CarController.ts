import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private _carService = new CarService();
  private req:Request;
  private res:Response;
 
  constructor(req:Request, res:Response, _next: NextFunction) {
    this.req = req;
    this.res = res;
  }

  async add() {
    // const { model, year, color, buyValue, doorsQty, seatsQty } = this.req.body;
    const exisit = this.req.body.status ? this.req.body.status : false;
    const car:ICar = { ...this.req.body, status: exisit };
    try {
      const data = await this._carService.add(car);
      return this.res.status(201).json(data);
    } catch (err) {
      return this.res.status(201).json({ message: car });
    }
  }

  async getAll(_req: Request, res: Response) {
    try {
      const data = await this._carService.findAll();
      return res.status(200).json(data);
    } catch (err) {
      return this.res.status(500).json({ message: 'Falha ao buscar todos' });
    }
  }
  /* async update(req: Request, res: Response) {
    const data = await this._carService.update(Number(req.params.id), req.body);
    return res.status(200).json({ data });
  } */
}
