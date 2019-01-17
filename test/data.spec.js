/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require('../src/data.js');
const input = [ {
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Población de 75 a 79 años, mujeres (% de la población femenina)',
  'indicatorCode': 'SP.POP.7579.FE.5Y'
},
{
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)',
  'indicatorCode': 'SG.VAW.REFU.ZS'
},
{
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Total de inscripciones, nivel primario, mujeres (% neto)',
  'indicatorCode': 'SE.PRM.TENR.FE'
},
{
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Las mujeres no embarazadas y que no amamantan pueden hacer los mismos trabajos que los hombres (1=sí; 0=no)',
  'indicatorCode': 'SG.JOB.NOPN.EQ'
},
{
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Desempleo, total (% de participación total en la fuerza laboral) (estimación nacional)',
  'indicatorCode': 'SL.UEM.TOTL.NE.ZS'
},
{
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Tasa de alfabetización, mujeres adultas (% de mujeres de 15 años o más)',
  'indicatorCode': 'SE.ADT.LITR.FE.ZS'
},
];

const outputViolence = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)',
    'indicatorCode': 'SG.VAW.REFU.ZS'
  },
];

const outputpopulation = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Población de 75 a 79 años, mujeres (% de la población femenina)',
    'indicatorCode': 'SP.POP.7579.FE.5Y'
  }
];

const outputeducation = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Total de inscripciones, nivel primario, mujeres (% neto)',
    'indicatorCode': 'SE.PRM.TENR.FE'
  },
];

const outputunemployment = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Desempleo, total (% de participación total en la fuerza laboral) (estimación nacional)',
    'indicatorCode': 'SL.UEM.TOTL.NE.ZS'
  },
];

const outputliteracy = [
  {
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Tasa de alfabetización, mujeres adultas (% de mujeres de 15 años o más)',
    'indicatorCode': 'SE.ADT.LITR.FE.ZS'
  },
];

describe('worldbank', () => {
  it('debería ser un objeto', () => {
    expect(typeof worldbank).toBe('object');
  });
});

describe('filtrado de population', () => {
  it('debería ser una función', () => {
    expect(typeof worldbank.filterPopulation).toBe('function');
  });
  it('debería retornar indicador de acuerdo a indicatorCode', () => {
    expect(worldbank.filterPopulation(input)).toEqual(outputpopulation);
  });
});

describe('filtrado de education', () => {
  it('debería ser una función', () => {
    expect(typeof worldbank.filterEducation).toBe('function');
  });
  it('debería retornar indicador de acuerdo a indicatorCode', () => {
    expect(worldbank.filterEducation(input)).toEqual(outputeducation);
  });
});

describe('filtrado de violence', () => {
  it('debería ser una función', () => {
    expect(typeof worldbank.filterViolence).toBe('function');
  });
  it('debería retornar indicador de acuerdo a indicatorCode', () => {
    expect(worldbank.filterViolence(input)).toEqual(outputViolence);
  });
});

describe('fltrado de unemployment', () => {
  it('debería ser una función', () => {
    expect(typeof worldbank.filterUnemployment).toBe('function');
  });
  it('debería retornar indicador de acuerdo a indicatorCode', () => {
    expect(worldbank.filterUnemployment(input)).toEqual(outputunemployment);
  });
});

describe('fltrado de literacy', () => {
  it('debería ser una función', () => {
    expect(typeof worldbank.filterLiteracy).toBe('function');
  });
  it('debería retornar indicador de acuerdo a indicatorCode', () => {
    expect(worldbank.filterLiteracy(input)).toEqual(outputliteracy);
  });
});

// TEST DE FUNCION PROMEDIO
const inputPromedio = {
  'data': {
    '2002': 31.4799995422363,
    '2003': 29.6299991607666,
    '2004': 27.6299991607666,
    '2005': 27.2099990844727,
    '2006': 26.9699993133545,
    '2007': 27.6700000762939,
    '2008': 26.9599990844727,
    '2009': 27.3600006103516,
    '2010': 25.3400001525879,
    '2011': 24.7999992370605,
    '2012': 25.0400009155273,
    '2013': 24.0900001525879,
    '2014': 24.2099990844727,
    '2015': 21.6800003051758,
    '2016': 23.7399997711182,
    '2017': 23.7600002288818
  }
};

const outputPromedio = 26.10;

describe('compute es una funcion', () => {
  it('deberia ser una función', () => {
    expect(typeof worldbank.compute).toBe('function');
  });
  it('retorna el promedio de los valores de indicadores', () => {
    expect(worldbank.compute(inputPromedio)).toEqual(outputPromedio);
  });
});

const inputOrdenado = [

  {'indicatorName': 'Población, mujeres (% del total)'},
  {'indicatorName': 'Población, mujeres'},
  {'indicatorName': 'Proporción de sexos al nacer (mujeres cada 1000 hombres)'},
  {'indicatorName': 'Población de 80 años en adelante, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 75 a 79 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 70 a 74 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 65 años de edad y más, mujeres (% del total)'},
  {'indicatorName': 'Población de 65 años de edad y más, mujeres'},
  {'indicatorName': 'Población de 65 a 69 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 50 a 64 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 55 a 59 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 50 a 54 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 45 a 49 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 40 a 44 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 35 a 39 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 30 a 34 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 25 a 29 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 20 a 24 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población entre 15 y 64 años de edad, mujeres (% del total)'},
  {'indicatorName': 'Población entre 15 y 64 años de edad, mujeres'},
  {'indicatorName': 'Población de 15 a 19 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 10 a 14 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población de 5 a 9 años, mujeres (% de la población femenina)'},
  {'indicatorName': 'Población entre 0 y 14 años de edad, mujeres (% del total)'},
  {'indicatorName': 'Población entre 0 y 14 años de edad, mujeres'},
  {'indicatorName': 'Población de 0 a 4 años, mujeres (% de la población femenina)'},
];

const outputOrdenado = [

  { 'indicatorName': 'Población de 0 a 4 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 10 a 14 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 15 a 19 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 20 a 24 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 25 a 29 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 30 a 34 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 35 a 39 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 40 a 44 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 45 a 49 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 5 a 9 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 50 a 54 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 50 a 64 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 55 a 59 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 65 a 69 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 65 años de edad y más, mujeres' },
  { 'indicatorName': 'Población de 65 años de edad y más, mujeres (% del total)' },
  { 'indicatorName': 'Población de 70 a 74 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 75 a 79 años, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población de 80 años en adelante, mujeres (% de la población femenina)' },
  { 'indicatorName': 'Población entre 0 y 14 años de edad, mujeres' },
  { 'indicatorName': 'Población entre 0 y 14 años de edad, mujeres (% del total)' },
  { 'indicatorName': 'Población entre 15 y 64 años de edad, mujeres' },
  { 'indicatorName': 'Población entre 15 y 64 años de edad, mujeres (% del total)' },
  { 'indicatorName': 'Población, mujeres' },
  { 'indicatorName': 'Población, mujeres (% del total)' },
  { 'indicatorName': 'Proporción de sexos al nacer (mujeres cada 1000 hombres)'}
];


describe('sortData es una función', () => {
  it('debería ser una función', () => {
    expect(typeof worldbank.sortData).toBe('function');
  });
  it('retorna los indicadores ordenados alfábeticamente', () => {
    expect(worldbank.sortData(inputOrdenado, 'Alfabéticamente')).toEqual(outputOrdenado);
  });
});
