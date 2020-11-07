const setup = require("../index");
const {
  chai,
  mocha,
  server,
  getBaseURL,
  getRequest,
  expect,
  assert,
  should,
} = setup;

describe("Test suite for jsonplaceholder page", function () {
  const { baseUrl } = server;
  //run before hook to get credentails for all the test cases
  before(() => {
    return new Promise(function (resolve, reject) {
      getBaseURL()
        .then((response) => {
          console.log("going to resolve with response:", response);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  });

  //verify results for "userId": 1, "id": 9,
  it("Verify userId 2 from user list", function () {
    console.log("entered in the test case");
    const chaiGet = getRequest("/posts");
    //console.log("chaiGet", chaiGet);
    chaiGet.end((err, res) => {
      expect(res).to.have.status(200);
      res.should.have.status(200);
      console.log("status is 200 OK");
      expect(res.body).to.be.an("array");
      res.body.should.be.a("array");
      res.should.be.json;
      res.body.length.should.be.eql(100);
      res.body[0].should.have.property("id");
      res.body[0].should.have.property("userId");
      res.body[0].should.have.property("title");
      res.body[0].should.have.property("body");
      expect(res.body[2].id).not.to.be.a("null");
      expect(res.body[2].id.should.be.eql(3));
      expect([
        {
          userId: 1,
          id: 9,
          title: "nesciunt iure omnis dolorem tempora et accusantium",
          body:
            "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
        },
      ]).to.have.deep.members([
        {
          userId: 1,
          id: 9,
          title: "nesciunt iure omnis dolorem tempora et accusantium",
          body:
            "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
        },
      ]);
      //expect(res.body).to.be.an('array').that.contains({id: 2});
    });
  });
  //verify results for // comments of a user id /posts/1/comments
  it("Verify comments of a user id 2", function () {
    console.log("entered in the test case");
    const chaiGet = getRequest("/posts/1/comments");
    //console.log("chaiGet", chaiGet);
    chaiGet.end((err, res) => {
      expect(res).to.have.status(200);
      res.should.have.status(200);
      console.log("status is 200 OK");
      expect(res.body).to.be.an("array");
      res.body.should.be.a("array");
      res.should.be.json;
      res.body.length.should.be.eql(5);
      expect(res.body[2]).to.have.any.keys(
        "id",
        "postId",
        "name",
        "email",
        "body"
      );
      res.body[2].should.have.property("id");
      res.body[2].should.have.property("postId");
      res.body[2].should.have.property("name");
      res.body[2].should.have.property("email");
      res.body[2].should.have.property("body");
      res.body[2].id.should.be.eql(3);
      expect(res.body[2].email).to.be.a("string");
      //expect(res.body).to.be.an('array').that.contains({id: 2});
    });
  });
});
