import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from '../Models/AbstractODM';
import MotorcycleSchema from '../Models/Schemas/MotorcycleSchema';

export default class Motorcycle extends AbstractODM<IMotorcycle> {
  private _id?: string | undefined;
  private _model: string;
  private _year: number;
  private _color: string;
  private _status: boolean;
  private _buyValue: number;
  private _category: string;
  private _engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(MotorcycleSchema, 'Motorcycle');
    this._id = motorcycle.id;
    this._model = motorcycle.model;
    this._year = motorcycle.year;
    this._color = motorcycle.color;
    this._status = motorcycle.status;
    this._buyValue = motorcycle.buyValue;
    this._category = motorcycle.category;
    this._engineCapacity = motorcycle.engineCapacity;
  }

  get id(): string | undefined {
    return this._id;
  }
  get model(): string {
    return this._model;
  }
  get year(): number {
    return this._year;
  }
  get color(): string {
    return this._color;
  }
  get status(): boolean {
    return this._status;
  }
  get buyValue(): number {
    return this._buyValue;
  }
}
