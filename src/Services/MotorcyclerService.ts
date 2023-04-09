import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private _odm = new MotorcycleODM();

  public setDomain(motocycler:IMotorcycle) {
    if (motocycler) return new Motorcycle(motocycler);
    return null;
  }

  public async add(motocycler:IMotorcycle) {
    const data = await this._odm.create(motocycler);
    return this.setDomain(data);
  }

  public async findAll() {
    const data = await this._odm.findAll();
    return data.map((e) => new Motorcycle(e));
  }

  public async getOneById(id:string) {
    const data = await this._odm.findOneById(id);
    return new Motorcycle(data);
  }

  async update(id:string, obj:Partial<IMotorcycle>) {
    const data = await this._odm.update(id, obj);
    return data;
  }
}