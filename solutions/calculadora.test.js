-const { expect } = require('chai');
const sinon = require('sinon');

// Importar las funciones a testear
delete require.cache[require.resolve('./calculadora')];
const calculadora = require('./calculadora');

// Extraer funciones para test unitarios
const { sumar, restar, multiplicar, dividir } = calculadora;

describe('Calculadora', () => {
  describe('sumar', () => {
    it('debe sumar dos números positivos', () => {
      expect(sumar(2, 3)).to.equal(5);
    });
    it('debe sumar números negativos', () => {
      expect(sumar(-2, -3)).to.equal(-5);
    });
    it('debe sumar un número positivo y uno negativo', () => {
      expect(sumar(5, -3)).to.equal(2);
    });
  });

  describe('restar', () => {
    it('debe restar dos números positivos', () => {
      expect(restar(5, 3)).to.equal(2);
    });
    it('debe restar números negativos', () => {
      expect(restar(-2, -3)).to.equal(1);
    });
    it('debe restar un número positivo y uno negativo', () => {
      expect(restar(5, -3)).to.equal(8);
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
      expect(multiplicar(-2, -3)).to.equal(6);
    });
    it('debe multiplicar un positivo y un negativo', () => {
      expect(multiplicar(2, -3)).to.equal(-6);
    });
  });

  describe('dividir', () => {
    it('debe dividir dos números positivos', () => {
      expect(dividir(6, 3)).to.equal(2);
    });
    it('debe dividir números negativos', () => {
      expect(dividir(-6, -3)).to.equal(2);
    });
    it('debe dividir un positivo y un negativo', () => {
      expect(dividir(6, -3)).to.equal(-2);
    });
    it('debe devolver error al dividir por cero', () => {
      expect(dividir(5, 0)).to.equal('Error: No se puede dividir por cero');
    });
  });
});
