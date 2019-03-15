const deebee = require('./duhBee/configypudding');

module.exports = {
  putIt,
  getIt,
};

async function putIt(thing) {
    const [id] = await deebee('games').insert(thing);
  
    return deebee('games')
      .where({ id: id })
      .first();
}

function getIt() {
  return deebee('games');
}