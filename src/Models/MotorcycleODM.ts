import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';
import MotorcycleSchema from './Schemas/MotorcycleSchema';

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    super(MotorcycleSchema, 'motorcycles');
  }
}