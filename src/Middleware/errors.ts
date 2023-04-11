import { Request, Response, NextFunction } from 'express';

type ErrorDefaultFormat = { message: string, status: number };
const resErrorFx = (status:number, message:string) => ({ status, message }) as ErrorDefaultFormat;

export class PersonalizedError extends Error {
  public message:string;
  public status:number;

  constructor(error:ErrorDefaultFormat) {
    super(error.message);
    this.message = error.message;
    this.status = error.status;
  }
}

export const errors = {
  carNotFound: resErrorFx(404, 'Car not found'),
  motocyclerNotFound: resErrorFx(404, 'Motorcycle not found'),
  invalidMongoId: resErrorFx(422, 'Invalid mongo id'),
  erroNoServidor: resErrorFx(500, 'Erro no servidor!'),
  badRequest: resErrorFx(400, 'Bad Request'),
};

function errorHandler(err:PersonalizedError, _req:Request, res:Response, _next:NextFunction) {
  return res.status(err.status || 500).json({ message: err.message });
}

export default errorHandler;
