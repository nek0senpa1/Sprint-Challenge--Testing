const request = require('supertest');

const server = require('./server.js');

describe('server stuff', () => {

    it('should return 200', async () => {
        const stuff = await request(server).get('/');

        expect(stuff.status).toBe(200);
    })

})