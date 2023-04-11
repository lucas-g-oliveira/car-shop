import { models, model, Model, Schema, isValidObjectId } from 'mongoose';
import { PersonalizedError, errors } from '../Middleware/errors';

abstract class AbstractODM<T> {
  protected odmModel: Model<T>;
  protected _schema: Schema;
  protected _modelName: string;

  constructor(schema:Schema, modelName: string) {
    this._schema = schema;
    this._modelName = modelName;
    this.odmModel = models[this._modelName] || model(this._modelName, this._schema);
  }

  async create(obj:T):Promise<T> {
    const data = await this.odmModel.create({ ...obj });
    return data;
  }

  async findAll():Promise<T[]> {
    const data = await this.odmModel.find();
    return data;
  }

  async findOneById(id:string):Promise<T> {
    if (!isValidObjectId(id)) throw new PersonalizedError(errors.invalidMongoId);
    const data = await this.odmModel.findById(id);
    return data as T;
  }

  async update(_id: string, obj:Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new PersonalizedError(errors.invalidMongoId);
    const data = await this.odmModel.findByIdAndUpdate(
      { _id },
      { ...obj },
      { new: true },
    );
    return data;
  }
}

export default AbstractODM;