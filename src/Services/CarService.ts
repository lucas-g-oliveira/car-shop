import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

export default class CarService {
  public createDomain(car:ICar) {
    if (car) return new Car(car);
    return null;
  }

  public async add(car:ICar) {
    const odm = new CarODM();
    const data = await odm.create(car);
    return this.createDomain(data);
  }

  public async findAll() {
    const odm = new CarODM();
    const data = await odm.findAll();
    return data;
  }
}