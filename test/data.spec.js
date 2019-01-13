/* global worldbank*/
require('../src/data.js');

beforeEach(() => {

  // TEST DE FUNCION PROMEDIO //
  const input  = {
          "data": {
            "2015": 10,
            "2016": 10,
            "2017": 10
          } ,
          "countryName": "Perú",
          "countryCode": "PER",
          "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
          "indicatorCode": "SL.TLF.PART.FE.ZS"
        } ;
  const output = 10;

});

describe('compute', () => {
 it('is a function', () => {
    expect(typeof compute).toBe('function');
  });

  it('calculate', () => {
    const result = compute(input);
    expect(result[0]).toBe(output);
  });

});
