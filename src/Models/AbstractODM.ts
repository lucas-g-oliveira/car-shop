import { models, model, Model, Schema, UpdateQuery, isValidObjectId } from 'mongoose';
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

  public async update(id: string, obj:Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw new PersonalizedError(errors.invalidMongoId);
    return this.odmModel.findByIdAndUpdate(
      { id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}

export default AbstractODM;