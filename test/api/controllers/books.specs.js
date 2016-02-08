var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('Books controller', function () {

  describe('hello_world', function () {

    describe('GET /hello', function () {

      it('should return a default string', function (done) {

        request(server)
          .get('/api/books')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function (err, res) {
            should.not.exist(err);

            res.body.should.eql([{title: 'un titre'}]);

            done();
          });
      });

    });

  });

});
