const request = require('supertest');

const server = require('./server.js');

describe('server stuff', () => {

    it('should return 200', async () => {
        const stuff = await request(server).get('/');

        expect(stuff.status).toBe(200);
    })

})

describe('getting the games', () => {

    it('should get status', async () => {
        const res = await request(server).get('/games');

        expect(res.status).toBe(201);
    })

    it('should return json stuff', async () => {
        const res = await request(server).get('/games');

        expect(res.type).toBe('application/json');
    })

    // honestly I'm not real sure what a 3rd test should be
    // on this endpoint, so here's a generic one...
    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('development');
    });

})

describe('putting in new games', function leonardo() {

    it('should return correct type of data', async () => {
        const newstuff = await request(server).post('/games/add');

        expect(newstuff.type).toBe('application/json')
    })

    it('should get status without sending data', async () => {
        const res = await request(server).post('/games/add');

        expect(res.status).toBe(501);
    })

    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('development');
    });

})