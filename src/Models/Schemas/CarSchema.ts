import { Schema } from 'mongoose';
import ICar from '../../Interfaces/ICar';

export default new Schema<ICar>({
  id: { type: Number, required: false },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  status: { type: Boolean, required: true },
  buyValue: { type: Number, required: true },
  doorsQty: { type: Number, required: true },
  seatsQtd: { type: Number, required: true },
});