/* eslint-disable no-unused-vars */
const copyData = (wbank) => {
  const wbankData = [];
  for (let i = 0; i < wbank.length; i++) {
    wbankData.push(Object.assign({}, wbank[i]));
  }
  return wbankData;
};
// INDICADORES DE CADA PAÍS
const getData = (arrayDePaises, index) => {
  const data = arrayDePaises[index];
  return data['1'].indicators;
};

// INDICADORES POR CATEGORIA: POBLACIÓN, VIOLENCIA, EDUCACIÓN, EMPLEO Y ALFABETIZACIÓN
const population = (element) => {
  let codePopulation = element.indicatorCode;
  let initialsPopulation = codePopulation.slice(0, 6);
  return initialsPopulation === 'SP.POP';
};

const education = (element) => {
  let codeEducation = element.indicatorCode;
  let initialsEducation = codeEducation.slice(0, 6);
  return initialsEducation === 'SE.PRM';
};

const violence = (element) => {
  let codeViolence = element.indicatorCode;
  let initialsViolence = codeViolence.slice(0, 6);
  return initialsViolence === 'SG.VAW';
};

const unemployment = (element) => {
  let codeUnemployment = element.indicatorCode;
  let initialsUnemployment = codeUnemployment.slice(0, 6);
  return initialsUnemployment === 'SL.UEM';
};

const literacy = (element) => {
  let codeLiteracy = element.indicatorCode;
  let initialsLiteracy = codeLiteracy.slice(0, 6);
  return initialsLiteracy === 'SE.ADT';
};

// FILTRADO DE INDICADORES

// ----------------- POBLACIÓN ----------------- //
const filterPopulation = (data) => {
  let arrayFilter = data.filter(population);
  return arrayFilter;
};
// ----------------- EDUCACIÓN ----------------- //
const filterEducation = (data) => {
  let arrayFilter = data.filter(education);
  return arrayFilter;
};

// console.log(filterEduPeru);

// ----------------- VIOLENCIA----------------- //

const filterViolence = (data) => {
  let arrayFilter = data.filter(violence);
  return arrayFilter;
};

// ----------------- DESEMPLEO----------------- //

const filterUnemployment = (data) => {
  let arrayFilter = data.filter(unemployment);
  return arrayFilter;
};
// ----------------- ALFABETIZACION----------------- //

const filterLiteracy = (data) => {
  let arrayFilter = data.filter(literacy);
  return arrayFilter;
};
// ORDENADO
const sortData = (data, sortBy) => {
  let arrayOrder = [];
  let tempData = [...data];
  if (sortBy === 'Original') {
    arrayOrder = tempData;
  } else if (sortBy === 'Alfabéticamente') {
    arrayOrder = tempData.sort((prevEl, nextEl) => {
      return prevEl.indicatorName > nextEl.indicatorName ? 1 : -1;
    });
  }
  return arrayOrder;
};

// PROMEDIO
const compute = (indicador) => {
  const data = Object.entries(indicador.data);
  let sum = 0;

  // se almacena la cantidad de elementos para poder obtener el promedio
  // una vez que se obtenga la suma
  const length = data.length;

  // se utliza la funcion forEach para recorrer cada uno de los años
  data.forEach(x => {
    const stringValue = x[1];
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
window.worldbank = {
  population,
  violence,
  education,
  unemployment,
  literacy,
  filterPopulation,
  filterViolence,
  filterEducation,
  filterUnemployment,
  filterLiteracy,
  compute,
  sortData,
};
