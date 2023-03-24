import { Schema } from 'mongoose';
import IMotorcycle from '../../Interfaces/IMotorcycle';

export default new Schema<IMotorcycle>({
  id: { type: Number, required: false },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  status: { type: Boolean, required: true },
  buyValue: { type: Number, required: true },
  category: { type: String, required: true },
  engineCapacity: { type: Number, required: true },
});