const chai = require('chai');
const { sumar, restar, multiplicar, dividir } = require('./calculadora');

// solutions/calculadora.test.js
const expect = chai.expect;

// Import functions directly (assuming they are exported in calculadora.js)
// If not exported, you need to export them first in calculadora.js

describe('Calculadora', () => {
  describe('sumar', () => {
    it('debe sumar dos números positivos', () => {
      expect(sumar(2, 3)).to.equal(5);
    });

    it('debe sumar números negativos', () => {
      expect(sumar(-2, -3)).to.equal(-5);
    });

    it('debe sumar cero', () => {
      expect(sumar(0, 5)).to.equal(5);
    });
  });

  describe('restar', () => {
    it('debe restar dos números positivos', () => {
      expect(restar(5, 3)).to.equal(2);
    });

    it('debe restar números negativos', () => {
      expect(restar(-5, -3)).to.equal(-2);
    });

    it('debe restar cero', () => {
      expect(restar(5, 0)).to.equal(5);
    });
  });

  describe('multiplicar', () => {
    it('debe multiplicar dos números positivos', () => {
      expect(multiplicar(2, 3)).to.equal(6);
    });

    it('debe multiplicar por cero', () => {
      expect(multiplicar(5, 0)).to.equal(0);
    });

    it('debe multiplicar números negativos', () => {
      expect(multiplicar(-2, 3)).to.equal(-6);
    });
  });

  describe('dividir', () => {
    it('debe dividir dos números positivos', () => {
      expect(dividir(6, 3)).to.equal(2);
    });

    it('debe dividir números negativos', () => {
      expect(dividir(-6, 3)).to.equal(-2);
    });

    it('debe devolver error al dividir por cero', () => {
      expect(dividir(5, 0)).to.equal('Error: No se puede dividir por cero');
    });
  });
});

// We recommend installing an extension to run mocha tests.