const softserver = require('./server.js');

const port = process.env.PORT || 7000;
softserver.listen(port, () => console.log(`Heyo Captain Jack! Running on the Port ${port} Rack!`));