import { models, model, Model, Schema, UpdateQuery, isValidObjectId } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected _schema: Schema;
  protected _modelName: string;

  constructor(schema:Schema, modelName: string) {
    this._schema = schema;
    this._modelName = modelName;
    this.model = models[this._modelName] || model(modelName, schema);
  }

  public async create(obj:T):Promise<T> {
    return this.model.create({ ...obj });
  }

  public async delete(id:number) {
    await this.model.deleteOne({ id });
  }

  public async findOne(id:number):Promise<T | null> {
    return this.model.findOne({ id });
  }

  public async findAll():Promise<T[] | []> {
    return this.model.find({});
  }

  public async update(_id: number, obj:Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(`Invalid ${this._modelName} id`);
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}

export default AbstractODM;