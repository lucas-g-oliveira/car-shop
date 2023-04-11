import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import { PersonalizedError, errors } from '../Middleware/errors';

export default class CarController {
  private _carService = new CarService();
  private req:Request;
  private res:Response;
  private next: NextFunction;
 
  constructor(req:Request, res:Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async add() {
    const exisit = this.req.body.status ? this.req.body.status : false;
    const car:ICar = { ...this.req.body, status: exisit };
    try {
      const data = await this._carService.add(car);
      return this.res.status(201).json(data);
    } catch (err) {
      this.next(new PersonalizedError(errors.erroNoServidor));
    }
  }

  async getAll() {
    try {
      const data = await this._carService.findAll();
      return this.res.status(200).json(data);
    } catch (err) {
      this.next(new PersonalizedError(errors.erroNoServidor));
    }
  }

  async getOneById() {
    const { id } = this.req.params;
    try {
      const data = await this._carService.getOneById(id);
      return this.res.status(200).json(data);
    } catch (err) {
      this.next(err);
    }
  }

  async update() {
    const data = await this._carService.update(this.req.params.id, this.req.body);
    return this.res.status(200).json(data);
  }
}
