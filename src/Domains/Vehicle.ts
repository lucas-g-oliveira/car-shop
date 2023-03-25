import ICar from '../Interfaces/ICar';
import Car from './Car';
import AbstractODM from '../Models/AbstractODM';
import IVehicle from '../Interfaces/IVehicle';
import CarSchema from '../Models/Schemas/CarSchema';
import Motorcycle from './Motorcycle';
import MotorcycleSchema from '../Models/Schemas/MotorcycleSchema';
import IMotorcycle from '../Interfaces/IMotorcycle';

class Vehicle extends AbstractODM<IVehicle> {
  constructor(vehicle: IVehicle) { 
    if (vehicle instanceof Car) {
      super(CarSchema, 'Car', vehicle);
    }
    if (vehicle instanceof Motorcycle) {
      super(MotorcycleSchema, 'Motorcycle', vehicle);
    }
  }
}

export default Vehicle;

const car:ICar = {
  model: '',
  year: 0,
  color: '',
  status: false,
  buyValue: 0,
  doorsQty: 0,
  seatsQtd: 0,
};

const moto:IMotorcycle = {
  model: '',
  year: 0,
  color: '',
  status: false,
  buyValue: 0,
  category: '',
  engineCapacity: 0,
};

const newCar = new Car(car);
const vehicleCar = new Vehicle(newCar);

const newMoto = new Motorcycle(moto);
const vehicleMoto = new Vehicle(newMoto);

vehicleCar.create();
vehicleMoto.findAll();
