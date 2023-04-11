import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import mock from './allMotocyclerMocks';
import MotorcycleService from '../../../src/Services/MotorcyclerService';

describe('Verifica se as operações de dominio motocycler funcionam como esperado', function () {
  it('Verifica se é posspivel adicionar uma motocicleta', async function () {
    sinon.stub(Model, 'create').resolves(mock.motorcycle);
    const serviceMotocycler = new MotorcycleService();
 
    const data = await serviceMotocycler.add(mock.motoToInsert);
    expect(data).to.be.deep.equal(mock.motorcycle);
    sinon.restore();
  });

  it('Verifica se é possível listar todos as motos', async function () {
    sinon.stub(Model, 'find').resolves([mock.motorcycle]);
    const serviceMoto = new MotorcycleService();

    const data = await serviceMoto.findAll();

    expect(data[0]).to.have.property('model').to.equal('Honda Cb 600f Hornet');
    sinon.restore();
  });

  it('Verifica se é possível buscar uma moto pelo id', async function () {
    sinon.stub(Model, 'findOne').resolves(mock.motorcycle);
    const serviceMoto = new MotorcycleService();

    const data = await serviceMoto.getOneById('634852326b35b59438fbea2f');
    expect(data).to.have.property('model').to.equal('Honda Cb 600f Hornet');
    sinon.restore();
  });

  it('Verifica se é possível atualizar uma moto', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves({ ...mock.motorcycle, color: 'black' });
    const serviceMoto = new MotorcycleService();

    const data = await serviceMoto.update('634852326b35b59438fbea2f', { color: 'black' });
    expect(data).to.have.property('color').to.equal('black');
    sinon.restore();
  });
});
