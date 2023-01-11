const chai = require("chai");
const { expect, assert } = require("chai");
const express = require("express");
const app = express();
let chaiHttp = require("chai-http");

chai.use(chaiHttp);
// Test case for getUserDetails endpoint
describe("GET /getUserDetails", () => {
  it("valid GET request to the endpoint", async () => {
    const res = await chai.request("http://localhost:4000").get("/Lordhacker");
    expect(res).to.have.status(200);
  });

  it("invalid GET request to the endpoint", async () => {
    const res = await chai
      .request("http://localhost:4000")
      .get("/Lordhacker7654");
    expect(res).to.have.status(404);
  });
});

// Test case for getUserRepo endpoint
describe("GET /getUserDetails", () => {
  it("valid GET request to the endpoint", async () => {
    const res = await chai
      .request("http://localhost:4000")
      .get("/Lordhacker/repos");
    expect(res).to.have.status(200);
  });

  it("invalid GET request to the endpoint", async () => {
    const res = await chai
      .request("http://localhost:4000")
      .get("/Lordhacker7654/repos");
    expect(res).to.have.status(404);
  });
});

// Test case for getUserRepoLanguages endpoint
describe("GET /getUserRepoLanguages", () => {
  it("valid GET request to the endpoint", async () => {
    const res = await chai
      .request("http://localhost:4000")
      .get("/repos/Lordhacker756/open-dashboard/languages");
    expect(res).to.have.status(200);
  });

  it("invalid GET request to the endpoint", async () => {
    const res = await chai
      .request("http://localhost:4000")
      .get("/repos/Lordhacker75657657a/open-dashboard/languages");
    expect(res).to.have.status(404);
  });
});
