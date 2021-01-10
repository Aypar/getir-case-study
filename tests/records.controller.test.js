const {app,server} = require('../server');
const request = require('supertest');

describe('POST /api/records/sum-of-records-count', () => {
    afterAll(async (done) => {
        await server.close();
        done();
    })
    it('-> should return Success with valid payload', async (done) => {
        const payload = {
            "startDate": "2016-11-20",
            "endDate": "2016-12-26",
            "minCount": 100,
            "maxCount": 300
        }
        const response = await request(app).post('/api/records/sum-of-records-count').send(payload)
        const {body} = response;
        expect(response.status).toBe(200)
        expect(body.msg).toBe('Success');
        done();
    })
    it('-> should return error with invalid payload', async (done) => {
        const payload = {
            "startDate": "invalid",
            "endDate": "invalid",
            "minCount": "string",
            "maxCount": "string"
        }
        const response = await request(app).post('/api/records/sum-of-records-count').send(payload)
        expect(response.status).toBe(400)
        done();
    })
    it('-> should has records', async (done) => {
        const payload = {
            "startDate": "2016-11-20",
            "endDate": "2016-12-26",
            "minCount": 2700,
            "maxCount": 3000
        }
        const response = await request(app).post('/api/records/sum-of-records-count').send(payload)
        const {body} = response;
        expect(response.status).toBe(200)
        expect(body.records).not.toBe(null);
        expect(body.records).not.toBe(undefined);
        expect(body.records.length).toBeGreaterThan(0);
        done();
    })
    it('-> should not has records', async (done) => {
        const payload = {
            "startDate": "2016-11-20",
            "endDate": "2016-12-26",
            "minCount": 1,
            "maxCount": 1
        }
        const response = await request(app).post('/api/records/sum-of-records-count').send(payload)
        const {body} = response;
        expect(response.status).toBe(200)
        expect(body.records).not.toBe(null);
        expect(body.records).not.toBe(undefined);
        expect(body.records.length).toBe(0);
        done();
    })
})


