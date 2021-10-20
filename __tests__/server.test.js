'use strict';

const app = require('../lib/server');
const supertest = require('supertest');
const request = supertest(app.app);

describe('Testing server', () => {
  it('throwing a 404 on a bad route', async () => {
    const response = await request.get('/badRoute');
    expect(response.status).toBe(404);
  });

  it('throwing a 404 on a bad method', async () => {
    const response = await request.put('/person');
    expect(response.status).toBe(404);
  });

  it('Should return 500 if no name in the query string', async () => {
    let response = await request.get('/person?name=');
    expect(response.status).toBe(500);
  });

  it('throwing 200 if there is a name in the query string', async () => {
    let response = await request.get('/person?name=Bryce');
    expect(response.status).toBe(200);
  });

  it('should return the correct output object', async () => {
    let response = await request.get('/person?name=Bryce');
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');
  });
});