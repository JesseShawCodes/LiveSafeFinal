const chai = require("chai");
const chaiHttp = require("chai-http");

const expect = chai.expect;

const { app } = require("../index");

chai.use(chaiHttp);

describe("News Room Data", function() {

  it("should list items on GET", function() {
    return chai
      .request(app)
      .get("/data")
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      });
  });
});