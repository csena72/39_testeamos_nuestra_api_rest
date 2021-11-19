const request = require('supertest');
const app = require('../../src');

describe('API Rest de productos', () => {

    it('POST / debe retornar Producto creado!', (done) => {
        request(app.start_test())
          .post('/api/productos')
          .send()
          .expect('Content-type', /json/)
          .expect(200)
          .end((err, res) => {
            if (err) throw err;
            expect(res.body).not.toBeNull();
            expect(res.body).not.toBeUndefined();
            done();
          });
      });

    it('GET / debe retornar todos los productos', (done) => {
        request(app.start_test())
          .post('/api/productos')
          .send()
          .expect('Content-type', /json/)
          .expect(200)
          .end((err, res) => {
            if (err) throw err;
            expect(res.body).not.toBeNull();
            expect(res.body).not.toBeUndefined();
            done();
          });
      });

      it('GET / debe retornar un producto', (done) => {
        const id = 1
        request(app.start_test())
          .post('/api/productos/:id')
          .send({id})
          .expect('Content-type', /json/)
          .expect(200)
          .end((err, res) => {
            if (err) throw err;
            expect(res.body).not.toBeNull();
            expect(res.body).not.toBeUndefined();
            done();
          });
      });

      it('PATCH / debe retornar el producto editado', (done) => {
        const id = 1
        request(app.start_test())
          .post('/api/productos/:id')
          .send({id})
          .expect('Content-type', /json/)
          .expect(200)
          .end((err, res) => {
            if (err) throw err;
            expect(res.body).not.toBeNull();
            expect(res.body).not.toBeUndefined();
            done();
          });
      });

      it('DELETE / debe retornar "OK" ', (done) => {
        const id = 1
        request(app.start_test())
          .post('/api/productos/:id')
          .send({id})
          .expect('Content-type', /json/)
          .expect(200)
          .end((err, res) => {
            if (err) throw err;
            expect(res.body).not.toBeNull();
            expect(res.body).not.toBeUndefined();
            done();
          });
      });

      it('GET / debe retornar 403 Forbidden', (done) => {
        request(app.start_test())
          .post('/api/productos/:id')
          .expect('Content-type', /json/)
          .expect(403)
          .end((err, res) => {
            if (err) throw err;
            expect(res.body).not.toBeNull();
            expect(res.body).not.toBeUndefined();
            done();
          });
      });

      it('GET / debe retornar un código de estado 404', (done) => {
        const id = 1
        request(app.start_test())
          .post('/api/productos')
          .expect('Content-type', /json/)
          .expect(404)
          .end((err, res) => {
            if (err) throw err;
            expect(res.body).not.toBeNull();
            expect(res.body).not.toBeUndefined();
            done();
          });
      });
});