<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* global WORLDBANK*/
// FILTRO DE INDICADORES EN PERÚ POR CATEGORIA: POBLACIÓN, VIOLENCIA, EDUCACIÓN Y EMPLEO.

const population = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

const sortDataPop = population.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
})
 console.log(sortDataPop)

const violence = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

const sortDataVio = violence.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});

const primaryEducation = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

const sortDataEdu = primaryEducation.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
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

const sortDataUnem = unemployment.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});

const literacy = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.ADT';
});

const sortDataLit = literacy.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});

// FILTRO DE INDICADORES POR MEXICO

const populationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

const sortDataPopMex = populationMex.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});

const violenceMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SG.VAW';
});

const sortDataVioMex = violenceMex.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});


const primaryEducationMex = WORLDBANK.MEX.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SE.PRM';
});

const sortDataEduMex = primaryEducationMex.sort(function(prev, next) {
  if (prev.indicatorName > next.indicatorName) {
    return 1;
  }
  if (prev.indicatorName < next.indicatorName) {
    return -1;
  }
  return 0;
});
=======
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window etc.
const example = () => {
  return 'example';
};
window.example = example;
>>>>>>> ccaa9f988d646d8cbf43292507a6dfb3983f5d4a

// FILTRADO DE CATEGORÍAS
const population = (arr) => {
  let populationData = [];
  populationData = arr.filter(populationElement => populationElement.indicatorCode.slice(0, 6) === 'SP.POP');
  return populationData;
};
const education = (arr) => {
  let educationData = [];
  educationData = arr.filter(educationElement => educationElement.indicatorCode.slice(0, 6) === 'SE.TER');
  return educationData;
};
const secondEducation = (arr) => {
  let secondEducationData = [];
  secondEducationData = arr.filter(secondaryEducationElement => secondaryEducationElement.indicatorCode.slice(0, 6) === 'SE.SEC');
  return secondEducationData;
};
const thirdEducation = (arr) => {
  let thirdEducationData = arr.filter(thirdEducationElement => thirdEducationElement.indicatorCode.slice(0, 6) === 'SE.TER');
  return thirdEducationData;
};
const violence = (arr) => {
  let violenceData = arr.filter(violenceElement => violenceElement.indicatorCode.slice(0, 6) === 'SG.VAW');
  return violenceData;
};
const job = (arr) => {
  let jobData = [];
  jobData = arr.filter(employmentElement => employmentElement.indicatorCode.slice(0, 6) === 'SL.EMP');
  return jobData;
};
const unemployment = (arr) => {
  let unemploymentData = [];
  unemploymentData = arr.filter(unemploymentElement => unemploymentElement.indicatorCode.slice(0, 6) === 'SL.UEM');
  return unemploymentData;
};

const literacy = (arr) => {
  let literacyData = [];
  literacyData = arr.filter(literacyElement => literacyElement.indicatorCode.slice(0, 6) === 'SE.ADT');
  return literacyData;
};

// DATA DE AÑOS STRING -> NUMBER
const converToInt = (data) => {
  const result = data.map((x) => {
    const array = [];
    array[0] = parseInt(x[0], 10) ;
    array[1] = x[1] ;
    return array;
  });
  return result;
};

const EndData = (Object) => {
  const entriesObject = Object.entries(EndData[0].data);
  return converToInt(entriesObject);
};

const filterToData = (data, string) => {
  let arr = [];
  arr = data.filter(element => element.indicatorName === string);
  return EndData(arr);
};

const printData = (data, country, string) => {
  const IndicatorsByCountry = data[country]['indicators'];
  return filterToData(IndicatorsByCountry, string) ;
};

// ORDENADO DE DATA
const compare = (element1, element2) => {
  if (parseInt(element1[0]) < parseInt(element2[0])) {
    return 1;
  }
  if (parseInt(element1[0]) > parseInt(element2[0])) {
    return -1;
  }
  return 0;
};
const sortData = (parameter) => {
  parameter.sort(compare);
  return parameter;
};

// PROMEDIO DE LA DATA
const calculateAverage = (data) => {
  const initial = 0;
  const addition = data.reduce((sum, current) => sum + current[1], initial);
  const total = addition / data.length;
  return total;
};

window.worldbank = {
  population,
  education,
  secondEducation,
  thirdEducation,
  violence,
  job,
  unemployment,
  literacy,
  printData,
  sortData,
  calculateAverage
};
