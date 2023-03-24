import ICar from '../Interfaces/ICar';

export default class Car {
  private _id?: string | undefined;
  private _model: string;
  private _year: number;
  private _color: string;
  private _status: boolean;
  private _buyValue: number;
  private doorsQty: number;
  private seatsQtd: number;

  constructor(car: ICar) {
    this._id = car.id;
    this._model = car.model;
    this._year = car.year;
    this._color = car.color;
    this._status = car.status || false;
    this._buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQtd = car.seatsQtd;
  }

  get id():string | undefined {
    return this._id;
  }

  get model():string {
    return this._model;
  }

  get year():number {
    return this._year;
  }

  get color():string {
    return this._color;
  }

  get status():boolean {
    return this._status;
  }

  get buyValue():number {
    return this._buyValue;
  }
}
