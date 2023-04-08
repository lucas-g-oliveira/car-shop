import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';
import CarSchema from './Schemas/CarSchema';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    super(CarSchema, 'cars');
  }
}