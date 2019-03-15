const express = require('express');

const server = express();

server.use(express.json());

const BubbaHoTep = require('./funcs')

server.get('/', (req, res) => {
  res.status(200).json('lookey here, it works');
});

server.get('/games', (rec,rez) => {
    BubbaHoTep.getIt('games')
    .then(stuffs => {
        rez.status(200).json(stuffs)
    })
    .catch(err => {
        rez.status(500).json(err)
    })
})

server.post('/games/add', (rec,rez) => {
    BubbaHoTep.putIt(rec.body)
    .then(junk => {
        rez.status(201).json(junk)
    })
    .catch(err => {
        rez.status(422).json(err)
    })
})

module.exports = server;