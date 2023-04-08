import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

export default class CarService {
  protected _odm = new CarODM();

  public setDomain(car:ICar) {
    if (car) return new Car(car);
    return null;
  }

  public async add(car:ICar) {
    const data = await this._odm.create(car);
    return this.setDomain(data);
  }

  public async findAll() {
    const data = await this._odm.findAll();
    return data.map((e) => new Car(e));
  }
}