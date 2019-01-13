
const arrData = Object.entries(WORLDBANK);
const copyData = (wbank) => {
  const wbankData = [];
  for (let i = 0; i < wbank.length; i++) {
    wbankData.push(Object.assign({}, wbank[i]));
  }
  return wbankData;
};
// INDICADORES DE CADA PAÍS
const data = copyData(arrData);
const getData = (arrayDePaises, index) => {
  const data = arrayDePaises[index];
  return data['1'].indicators;
};

const indicatorsPER = getData(data, 0);
const indicatorsMEX = getData(data, 1);
const indicatorsCHL = getData(data, 2);
const indicatorsBRS = getData(data, 3);

// INDICADORES POR CATEGORIA: POBLACIÓN, VIOLENCIA, EDUCACIÓN, EMPLEO Y ALFABETIZACIÓN
const population = (element) => {
  let codePopulation = element.indicatorCode;
  let initialsPopulation = codePopulation.slice(0, 6);
  return initialsPopulation === 'SP.POP';
};

const education = (element) => {
  let codeEducation = element.indicatorCode;
  let initialsEducation = codeEducation.slice(0, 2);
  return initialsEducation === 'SE';
};

const violence = (element) => {
  let codeViolence = element.indicatorCode;
  let initialsViolence = codeViolence.slice(0, 6);
  return initialsViolence === 'SG.VAW';
};

const job = (element) => {
  let codeJob = element.indicatorCode;
  let initialsJob = codeJob.slice(0, 6);
  return initialsJob === 'SG.JOB';
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
const filterPopPer = filterPopulation(indicatorsPER);
const filterPopMex = filterPopulation(indicatorsMEX);
const filterPopChl = filterPopulation(indicatorsCHL);
const filterPopBrs = filterPopulation(indicatorsBRS);

// ----------------- EDUCACIÓN ----------------- //
const filterEducation = (data) => {
  let arrayFilter = data.filter(education);
  return arrayFilter;
};
const filterEduPer = filterEducation(indicatorsPER);
const filterEduMex = filterEducation(indicatorsMEX);
const filterEduChl = filterEducation(indicatorsCHL);
const filterEduBrs = filterEducation(indicatorsBRS);
// console.log(filterEduPeru);

// ----------------- VIOLENCIA----------------- //

const filterViolence = (data) => {
  let arrayFilter = data.filter(violence);
  return arrayFilter;
};
const filterViolencePer = filterViolence(indicatorsPER);
const filterViolenceMex = filterViolence(indicatorsMEX);
const filterViolenceChl = filterViolence(indicatorsCHL);
const filterViolenceBrs = filterViolence(indicatorsBRS);

// ----------------- EMPLEO ----------------- //
const filterJob = (data) => {
  let arrayFilter = data.filter(job);
  return arrayFilter;
};
const filterJobPer = filterJob(indicatorsPER);
const filterJobMex = filterJob(indicatorsMEX);
const filterJobChl = filterJob(indicatorsCHL);
const filterJobBrs = filterJob(indicatorsBRS);


// ----------------- DESEMPLEO----------------- //

const filterUnemployment = (data) => {
  let arrayFilter = data.filter(unemployment);
  return arrayFilter;
};
const filterUnemploymentPer = filterUnemployment(indicatorsPER);
const filterUnemploymentMex = filterUnemployment(indicatorsMEX);
const filterUnemploymentChl = filterUnemployment(indicatorsCHL);
const filterUnemploymentBrs = filterUnemployment(indicatorsBRS);


// ----------------- ALFABETIZACION----------------- //

const filterLiteracy = (data) => {
  let arrayFilter = data.filter(literacy);
  return arrayFilter;
};
const filterLiteracyPer = filterLiteracy(indicatorsPER);
const filterLiteracyMex = filterLiteracy(indicatorsMEX);
const filterLiteracyChl = filterLiteracy(indicatorsCHL);
const filterLiteracyBrs = filterLiteracy(indicatorsBRS);

// ORDENADO

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
  job,
  unemployment,
  filterPopulation,
  filterViolence,
  filterEducation,
  filterUnemployment,
  filterJob,
};
