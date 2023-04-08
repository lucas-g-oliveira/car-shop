import Car from './Car';
import AbstractODM from '../Models/AbstractODM';
import IVehicle from '../Interfaces/IVehicle';
import CarSchema from '../Models/Schemas/CarSchema';
import Motorcycle from './Motorcycle';
import MotorcycleSchema from '../Models/Schemas/MotorcycleSchema';

class Vehicle extends AbstractODM<IVehicle> {
  private _vehicle:IVehicle;

  constructor(vehicle: IVehicle) {
    super(
      (vehicle instanceof Motorcycle) ? MotorcycleSchema : CarSchema,
      (vehicle instanceof Car) ? 'Car' : 'Motorcycle',
    );
    this._vehicle = vehicle;
  }

  get id():string | undefined {
    return this._vehicle.id;
  }

  get model():string {
    return this._vehicle.model;
  }

  get year():number {
    return this._vehicle.year;
  }

  get color():string {
    return this._vehicle.color;
  }

  get status():boolean {
    return this._vehicle.status;
  }

  get buyValue():number {
    return this._vehicle.buyValue;
  }
}

export default Vehicle;
