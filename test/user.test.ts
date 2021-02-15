import request from "supertest";
import app from "../src/app";
import mongoose from 'mongoose';

describe("GET /user", () => {
  afterAll(async () => { 
    await mongoose.connection.close()
  })
  
  it("should return 200 OK", (done) => {
    request(app).get("/user/41224d776a326fb40f000001").expect(404, done);
  });
});
