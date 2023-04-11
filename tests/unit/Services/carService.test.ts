import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import mock from './allCarMoks';
import CarService from '../../../src/Services/CarService';

describe('Verifica se as operações de dominio carro funcionam como esperado', function () {
  it('Verifica se é posspivel adicionar um carro', async function () {
    sinon.stub(Model, 'create').resolves(mock.car);
    const serviceCar = new CarService();
 
    const data = await serviceCar.add(mock.carToIsert);
    expect(data).to.be.deep.equal(mock.car);
    sinon.restore();
  });

  it('Verifica se é possível listar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves([mock.car]);
    const serviceCar = new CarService();

    const data = await serviceCar.findAll();

    expect(data[0]).to.have.property('model').to.equal('Marea');
    sinon.restore();
  });

  it('Verifica se é possível buscar um carro pelo id', async function () {
    sinon.stub(Model, 'findOne').resolves(mock.car);
    const serviceCar = new CarService();

    const data = await serviceCar.getOneById('6348513f34c397abcad040b2');
    expect(data).to.have.property('model').to.equal('Marea');
    sinon.restore();
  });

  it('Verifica se é possível atualizar um carro', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves({ ...mock.car, model: 'Elétrico' });
    const serviceCar = new CarService();

    const data = await serviceCar.update('6348513f34c397abcad040b2', { model: 'Elétrico' });
    expect(data).to.have.property('model').to.equal('Elétrico');
    sinon.restore();
  });
});
