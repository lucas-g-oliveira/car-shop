import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private _odm = new MotorcycleODM();

  public createDomain(motocycler:IMotorcycle) {
    if (motocycler) return new Motorcycle(motocycler);
    return null;
  }

  public async add(motocycler:IMotorcycle) {
    const data = await this._odm.create(motocycler);
    return this.createDomain(data);
  }
}