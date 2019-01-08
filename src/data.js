/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* global WORLDBANK*/
// FILTRO DE INDICADORES EN PERÚ POR CATEGORIA: POBLACIÓN, VIOLENCIA, EDUCACIÓN Y EMPLEO.

const population = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

const violence = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

const primaryEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

const thirdEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});

const secondEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});

const inscriptionsEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});

const unemployment = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

const literacy = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ADT';
});

// FILTRO DE INDICADORES POR MEXICO

const populationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

const violenceMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

const primaryEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

/*
const secondEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});

const thirdEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});

const inscriptionsEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});
*/

const unemploymentMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

const literacyMex = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ADT';
});

// FILTRO DE INDICADORES EN CHILE


const populationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

const violenceChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

const primaryEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

const secondEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});

const thirdEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});

const inscriptionsEducationChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});

const unemploymentChl = WORLDBANK.CHL.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

const literacyChl = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ADT';
});

// FILTRO DE INDICADORES EN BRASIL

const populationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

const violenceBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

const primaryEducationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

const secondEducationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.SEC';
});

const thirdEducationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.TER';
});

const inscriptionsEducationBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ENR';
});

const unemploymentBrasil = WORLDBANK.BRA.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SL.UEM';
});

const literacyBrasil = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ADT';
});



const compute = (indicador) => {
  const data = Object.entries(indicador.data);
  let sum = 0;

  // se almacena la cantidad de elementos para poder obtener el promedio
  // una vez que se obtenga la suma
  const length = data.length;

  // se utliza la funcion forEach para reccorrer cada uno de los años
  data.forEach(y => {
    const stringValue = y[1];
    let value = 0;

    if (stringValue !== '')
      value = parseFloat(stringValue);

    sum += value;
  });

  // se calcula el average
  let average = sum / length;

  // se redondea a 2 decimales despues de la coma
  average = Math.round(average * 100) / 100;


  return average;
};

window.Worldbank = {
  population,
};
