const server = require("../app.js");
const request = require("supertest");
const db = require("../data/dbConfig.js");

describe("POST /api/auth/login", () => {
  it("Responds 200 when logging in with valid credentials", async () => {
    return await request(server)
      .post("/api/auth/login")
      .send({
        username: "test@test.com",
        password: "test"
      })
      .expect(200);
  });
});

describe("POST /api/auth/login", () => {
  it("Responds 401 when logging in with invalid credentials", async () => {
    return await request(server)
      .post("/api/auth/login")
      .send({
        username: "thisis@wrong.com",
        password: "error"
      })
      .expect(401);
  });
});
