var request = require('supertest');
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('./server');
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('responds to /hello', function testHello(done) {
  request(server)
    .get('/hello')
    .expect(200, done);
  });
  it('404 everything else and more', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
