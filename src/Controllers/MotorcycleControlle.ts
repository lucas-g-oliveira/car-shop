import { Request, Response, NextFunction } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcyclerService';
import { PersonalizedError, errors } from '../Middleware/errors';

export default class MotorcycleControlle {
  private _motoService = new MotorcycleService();
  private req:Request;
  private res:Response;
  private next:NextFunction;
 
  constructor(req:Request, res:Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async add() {
    const exisit = this.req.body.status ? this.req.body.status : false;
    const motorcycle:IMotorcycle = { ...this.req.body, status: exisit };
    try {
      const data = await this._motoService.add(motorcycle);
      return this.res.status(201).json({ ...data });
    } catch (err) {
      this.next(new PersonalizedError(errors.erroNoServidor));
    }
  }
  async getAll() {
    const data = await this._motoService.findAll();
    return this.res.status(200).json(data);
  }

  async getOneById() {
    const { id } = this.req.params;
    try {
      const data = await this._motoService.getOneById(id);
      return this.res.status(200).json(data);
    } catch (err) {
      this.next(err);
    }
  }

  async update() {
    const data = await this._motoService.update(this.req.params.id, this.req.body);
    return this.res.status(200).json({ data });
  }
}
