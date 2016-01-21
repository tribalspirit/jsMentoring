var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
let mongoose = require('mongoose');

chai.use(chaiHttp);

describe('Notes API test', function() {

  before(function(){
  });

  it('should get ALL articles on /api/articles GET', function(done) {
    this.timeout(5000);
    chai.request(server)
      .get('/api/articles/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });

  it('should post GET', function(done) {
    this.timeout(5000);
    chai.request(server)
      .post('/api/articles')
      .send({'title': 'Foo', 'content': 'Bar'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.status.should.equal('OK');
        res.body.should.have.property('note');
        res.body.note.should.be.a('object');
        res.body.note.should.have.property('title');
        res.body.note.should.have.property('content');
        res.body.note.should.have.property('created');
        res.body.note.should.have.property('_id');
        res.body.note.title.should.equal('Foo');
        res.body.note.content.should.equal('Bar');
        done();
      });
  });


});
