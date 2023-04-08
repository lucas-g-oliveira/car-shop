/* import { Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcyclerService';

export default class MotorcycleControlle {
  private _motoService:MotorcycleService;

  constructor() {
    this._motoService = new MotorcycleService();
  }

  async add(req: Request, res: Response) {
    // const moto:IMotorcycle = { ...req.body, status: (req.body.status || false) };

    const { model, year, color, status, buyValue, category, engineCapacity } = req.body;
    const moto:IMotorcycle = {
      model, year, color, status: status || false, buyValue, category, engineCapacity,
    };

    const data = await this._motoService.add(moto);
    return res.status(201).json(data);
  }
  async getAll(req: Request, res: Response) {
    const data = await this._motoService.findAll();
    return res.status(200).json(data);
  }
  async update(req: Request, res: Response) {
    const data = await this._motoService.update(Number(req.params.id), req.body);
    return res.status(200).json({ data });
  }
}
 */