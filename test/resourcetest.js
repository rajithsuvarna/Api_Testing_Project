const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../index");

//Get all resource api
describe("GET /", () => {
  it("Should return all resources", async () => {
    const res = await request(app).get("/api/v1/resources/getAll");

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });
});

//Get resource by id api
describe("GET/:id", () => {
  it("Should return a resource if valid id is passed", async () => {
    const resourceid = 1;
    const res = await request(app).get(
      "/api/v1/resources/getbyid/" + resourceid
    );
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("name");
    expect(res.body).to.have.property("email");
    expect(res.body).to.have.property("completed");
    expect(res.body).to.have.property("points");
  });

  //negative scenario test case to check invalid id
  it("Should return 400 error when invalid id is passed", async () => {
    const invalidid = "y123";
    const res = await request(app).get(
      "/api/v1/resources/getbyid/" + invalidid
    );
    expect(res.status).to.equal(404);
  });
});

describe("POST/", () => {
  //post api test case
  it("Should create a new resource", async () => {
    const res = await request(app).post("/api/v1/resources/create").send({
      name: "Java",
      email: "java@gmail.com",
      completed: true,
      points: 40,
    });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("id");
    expect(res.body.name).to.equal("Java");
    expect(res.body.email).to.equal("java@gmail.com");
    expect(res.body.completed).to.equal(true);
    expect(res.body.points).to.equal(40);
  });

  //negative scenario test case
  it("Should return 400 error when invalid data passed", async () => {
    const res = await request(app).post("/api/v1/resources/create").send({
      name1: "Java",
      email1: "java@gmail.com",
      completed1: true,
      points1: 40,
    });
    expect(res.status).to.equal(400);
  });
});

describe("PUT/", () => {});

describe("DELETE/", () => {});
