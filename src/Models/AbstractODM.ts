import { models, model, Model, Schema/* , UpdateQuery, isValidObjectId */ } from 'mongoose';

abstract class AbstractODM<T> {
  protected odmModel: Model<T>;
  protected _schema: Schema;
  protected _modelName: string;

  constructor(schema:Schema, modelName: string) {
    this._schema = schema;
    this._modelName = modelName;
    this.odmModel = models[this._modelName] || model(modelName, schema);
  }

  public async create(obj:T):Promise<T> {
    return this.odmModel.create({ ...obj });
  }

  public async findAll():Promise<T[] | []> {
    return this.odmModel.find();
  }

  /* public async update(_id: number, obj:Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(`Invalid ${this._modelName} id`);
    return this.odmModel.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  } */
}

export default AbstractODM;