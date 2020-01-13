const server = require("../app.js");
const request = require("supertest");
const db = require("../data/dbConfig.js");

describe("GET /api/produce/user/1", () => {
  it("Responds 200 when getting all produce for user 1", async () => {
    const token = await request(server)
      .post("/api/auth/login")
      .send({
        username: "test@test.com",
        password: "test"
      })
      .then(res => {
        return res.body.token;
      });
    return await request(server)
      .get("/api/produce/user/1")
      .set("Authorization", token)
      .expect(200);
  });
});

describe("POST /api/produce", () => {
  it("Responds 200 when adding produce item", async () => {
    const token = await request(server)
      .post("/api/auth/login")
      .send({
        username: "test@test.com",
        password: "test"
      })
      .then(res => {
        return res.body.token;
      });
    return await request(server)
      .post("/api/produce")
      .set("Authorization", token)
      .send({
        farmer_id: 1,
        name: "New Produce Item",
        price: 1.99,
        quantity: 1
      })
      .expect(200);
  });

  beforeEach(async () => {
    await db("produce").truncate();
  });
});
