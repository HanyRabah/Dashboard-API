const { parcels, tractors } = require('./data');
const Parcel = require('../db/models/parcel');
const Tractors = require('../db/models/tractor');

class FakeDB {

  async clean() {
    await Parcel.deleteMany({});
    await Tractors.deleteMany({})
  }

  async addData() {
    await Parcel.create(parcels);
    await Tractors.create(tractors);
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDB();
