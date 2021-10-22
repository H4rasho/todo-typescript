import request from "supertest";
import { app } from "../index";

describe("GET /todo", () => {
  it("respnde con un formato json y un status 200", (done) => {
    request(app)
      .get("/api/todo")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe("PUT /todo", () => {
  it("responde con un status 200", (done) => {
    request(app)
      .put("/api/todo/delete/61730b410220cfdf775718ba")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  it("responde con un status 404 not found", (done) => {
    request(app)
      .put("/api/todo/delete/6171c8da2602c33ae1cc5850")
      .expect("Content-Type", /json/)
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  it("responde con un status 404 not found", (done) => {
    request(app)
      .put("/api/todo/delete/dasdsdsg")
      .expect("Content-Type", /json/)
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe("POST /todo", () => {
  it("responde con un status 201 created", (done) => {
    request(app)
      .post("/api/todo")
      .send({ text: "terminar todo backend con super test" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
