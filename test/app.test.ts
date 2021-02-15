import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';

describe('GET /random-url', () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should return 404', (done) => {
    request(app).get('/reset').expect(404, done);
  });
});
