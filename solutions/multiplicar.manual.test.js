const { multiplicar } = require('./calculadora');

describe('Casos de uso manuales para multiplicar', () => {
  test('Multiplicar dos números positivos', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test('Multiplicar un número positivo y uno negativo', () => {
    expect(multiplicar(-5, 6)).toBe(-30);
  });

  test('Multiplicar dos números negativos', () => {
    expect(multiplicar(-2, -8)).toBe(16);
  });

  test('Multiplicar por cero (a = 0, b = 10)', () => {
    expect(multiplicar(0, 10)).toBe(0);
  });

  test('Multiplicar por cero (a = 7, b = 0)', () => {
    expect(multiplicar(7, 0)).toBe(0);
  });

  test('Multiplicar números decimales (2.5 * 4)', () => {
    expect(multiplicar(2.5, 4)).toBe(10);
  });

  test('Multiplicar números decimales (-1.5 * 2)', () => {
    expect(multiplicar(-1.5, 2)).toBe(-3);
  });

  test('Multiplicar números grandes', () => {
    expect(multiplicar(1000000, 1000000)).toBe(1000000000000);
  });

  test('Multiplicar por uno', () => {
    expect(multiplicar(1, 99)).toBe(99);
  });

  test('Multiplicar por -1', () => {
    expect(multiplicar(-1, 99)).toBe(-99);
  });

  test('Multiplicar valores no numéricos', () => {
    expect(Number.isNaN(multiplicar('a', 2))).toBe(true);
  });
});
