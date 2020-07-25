const config = require('../config');
const mongoose = require('mongoose');

require('./models/parcel');
require('./models/tractor');
require('./models/process');

exports.connect = () => {
  return mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }, (err) => {
    if(err) { console.error(err); } else { console.log('DB connected');}
    
  })
}
