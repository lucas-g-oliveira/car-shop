import { Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private _carService = new CarService();
  private _req:Request;
  private _res:Response;

  constructor(req:Request, res:Response) {
    this._req = req;
    this._res = res;
  }

  async add() {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = this._req.body;
    const car:ICar = { model, year, color, buyValue, doorsQty, seatsQty, status: status || false };
    try {
      const data = await this._carService.add(car);
      return this._res.status(201).json(data);
    } catch (err) {
      return this._res.status(500).json({ message: 'Falha ao adicionar ao carro' });
    }
  }
  
  async getAll(req: Request, res: Response) {
    try {
      const data = await this._carService.findAll();
      return res.status(200).json(data);
    } catch (err) {
      return this._res.status(500).json({ message: 'Falha ao buscar todos' });
    }
  }
  /* async update(req: Request, res: Response) {
    const data = await this._carService.update(Number(req.params.id), req.body);
    return res.status(200).json({ data });
  } */
}
