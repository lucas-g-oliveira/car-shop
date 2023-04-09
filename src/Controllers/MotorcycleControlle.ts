import { Request, Response, NextFunction } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcyclerService';

export default class MotorcycleControlle {
  private _carService = new MotorcycleService();
  private req:Request;
  private res:Response;
 
  constructor(req:Request, res:Response, _next: NextFunction) {
    this.req = req;
    this.res = res;
  }

  async add() {
    const exisit = this.req.body.status ? this.req.body.status : false;
    const motorcycle:IMotorcycle = { ...this.req.body, status: exisit };
    try {
      const data = await this._carService.add(motorcycle);
      return this.res.status(201).json({ ...data, id: null });
    } catch (err) {
      return this.res.status(400).json({ message: 'BAD REQUEST' });
    }
  }
/*   async getAll(req: Request, res: Response) {
    const data = await this._motoService.findAll();
    return res.status(200).json(data);
  }
  async update(req: Request, res: Response) {
    const data = await this._motoService.update(Number(req.params.id), req.body);
    return res.status(200).json({ data });
  } */
}
