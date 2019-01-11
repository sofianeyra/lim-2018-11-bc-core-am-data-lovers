/* global worldbank*/
require('../src/data.js');

/* const input =
    [
      {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Desempleo, mujeres jóvenes (% de participación en …de mujeres de 15 a 24 años) (estimación nacional)', indicatorCode: 'SL.UEM.1524.FE.NE.ZS'},
      {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Educacin terciaria, profesores (% de mujeres)', indicatorCode: 'SE.TER.TCHR.FE.ZS'},
      {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Adolescentes que no asisten a la escuela, mujeres (% de mujeres en edad de asistir al ciclo inferior de la escuela secundaria', indicatorCode: 'SE.SEC.UNER.LO.FE.ZS'},
      {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Relación entre empleo y población, mayores de 15 años, mujeres (%) (estimación modelado OIT)', indicatorCode: 'SL.EMP.TOTL.SP.FE.ZS'},
      {countryName: 'Perú', countryCode: 'PER', indicatorName: 'Población de 70 a 74 años, mujeres (% de la población femenina)', indicatorCode: 'SP.POP.7074.FE.5Y'}
    ];

const outputPopulation = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Población de 70 a 74 años, mujeres (% de la población femenina)', indicatorCode: 'SP.POP.7074.FE.5Y'}];
const outputEducation = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Educacin terciaria, profesores (% de mujeres)', indicatorCode: 'SE.TER.TCHR.FE.ZS'}];
const outputSecondaryEducation = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Adolescentes que no asisten a la escuela, mujeres (% de mujeres en edad de asistir al ciclo inferior de la escuela secundaria', indicatorCode: 'SE.SEC.UNER.LO.FE.ZS'}];
const outputEmployment = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Relación entre empleo y población, mayores de 15 años, mujeres (%) (estimación modelado OIT)', indicatorCode: 'SL.EMP.TOTL.SP.FE.ZS'}];
const outputUnemployment = [{countryName: 'Perú', countryCode: 'PER', indicatorName: 'Desempleo, mujeres jóvenes (% de participación en …de mujeres de 15 a 24 años) (estimación nacional)', indicatorCode: 'SL.UEM.1524.FE.NE.ZS'}];

describe('worldbank', () => {
  it('deberia ser un objeto', () => {
    expect(typeof worldbank).toBe('object');
  });
  describe('worldbank.population', () => {
    it('deberia ser una funcion', () => {
      expect(typeof worldbank.population).toBe('function');
    });
    it('deberia retornar un array de objetos, cuyo key indicatorCode tenga un value que inicia con el string SP.POP', () => {
      expect(worldbank.population(input)).toEqual(outputPopulation);
    });
    it('deberia retornar un nuevo array, no modificar el original', () => {
      expect(worldbank.population(input)).not.toEqual(input);
    });
  });
});*/

// TEST DE FUNCION PROMEDIO //

const input  = [ ];
const output = [];

describe("compute es una función",() => {
it("deberia ser una función",() =>
)
