/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Obteniendo data worldbank
const arrayData = Object.entries(WORLDBANK);
const data = copyData(arrayData);

// Obteniendo indicadores por país
const indicatorsPERU = getData(data, 0);
const indicatorsMEXICO = getData(data, 1);
const indicatorsCHILE = getData(data, 2);
const indicatorsBRASIL = getData(data, 3);

// Obteniendo indicadores de población
const filterPopulationPeru = filterPopulation(indicatorsPERU);
const filterPopulationMexico = filterPopulation(indicatorsMEXICO);
const filterPopulationChile = filterPopulation(indicatorsCHILE);
const filterPopulationBrasil = filterPopulation(indicatorsBRASIL);

// Obteniendo indicadores de educación
const filterEducationPeru = filterEducation(indicatorsPERU);
const filterEducationMexico = filterEducation(indicatorsMEXICO);
const filterEducationChile = filterEducation(indicatorsCHILE);
const filterEducationBrasil = filterEducation(indicatorsBRASIL);

// Obteniendo indicadores de violencia
const filterViolencePeru = filterViolence(indicatorsPERU);
const filterViolenceMexico = filterViolence(indicatorsMEXICO);
const filterViolenceChile = filterViolence(indicatorsCHILE);
const filterViolenceBrasil = filterViolence(indicatorsBRASIL);

// Obteniendo indicadores de desempleo
const filterUnemploymentPeru = filterUnemployment(indicatorsPERU);
const filterUnemploymentMexico = filterUnemployment(indicatorsMEXICO);
const filterUnemploymentChile = filterUnemployment(indicatorsCHILE);
const filterUnemploymentBrasil = filterUnemployment(indicatorsBRASIL);

// Obteniendo indicadores de literacy
const filterLiteracyPeru = filterLiteracy(indicatorsPERU);
const filterLiteracyMexico = filterLiteracy(indicatorsMEXICO);
const filterLiteracyChile = filterLiteracy(indicatorsCHILE);
const filterLiteracyBrasil = filterLiteracy(indicatorsBRASIL);

// MENÚ DE NAVEGACIÓN
const pageInicial = document.getElementById('pagina-inicio');
const pagePeru = document.getElementById('pagina-peru');
const pageMexico = document.getElementById('pagina-mexico');
const pageChile = document.getElementById('pagina-chile');
const pageBrasil = document.getElementById('pagina-brasil');
const footer = document.getElementById('pie-de-pagina');

const inicialButton = document.getElementById('inicio');
const peruButton = document.getElementById('peru-menu');
const mexicoButton = document.getElementById('mexico-menu');
const chileButton = document.getElementById('chile-menu');
const brasilButton = document.getElementById('brasil-menu');

// PANTALLA INICIO
inicialButton.addEventListener('click', () => {
  pageInicial.style.display = 'block';
  pagePeru.style.display = 'none';
  pageMexico.style.display = 'none';
  pageChile. style.display = 'none';
  pageBrasil.style.display = 'none';
  footer.style.display = 'block';
});
// PANTALLA PERÚ
peruButton.addEventListener('click', () => {
  pageInicial.style.display = 'none';
  pagePeru.style.display = 'block';
  pageMexico.style.display = 'none';
  pageChile. style.display = 'none';
  pageBrasil.style.display = 'none';
  footer.style.display = 'none';
});
// PANTALLA MÉXICO
mexicoButton.addEventListener('click', () => {
  pageInicial.style.display = 'none';
  pagePeru.style.display = 'none';
  pageMexico.style.display = 'block';
  pageChile. style.display = 'none';
  pageBrasil.style.display = 'none';
  footer.style.display = 'none';
});
// PANTALLA CHILE
chileButton.addEventListener('click', () => {
  pageInicial.style.display = 'none';
  pagePeru.style.display = 'none';
  pageMexico.style.display = 'none';
  pageChile. style.display = 'block';
  pageBrasil.style.display = 'none';
  footer.style.display = 'none';
});
// PANTALLA BRASIL
brasilButton.addEventListener('click', () => {
  pageInicial.style.display = 'none';
  pagePeru.style.display = 'none';
  pageMexico.style.display = 'none';
  pageChile. style.display = 'none';
  pageBrasil.style.display = 'block';
  footer.style.display = 'none';
});

// se da click en el boton de la pantalla inicio para cuando empiece el proyecto
inicialButton.click();

// ------------------------- PERÚ ----------------------------------- //

// BOTONES PERÚ

const buttonPopulation = document.getElementById('boton-population');
const buttonViolence = document.getElementById('boton-violence');
const buttonEducation = document.getElementById('boton-education');
const buttonUnemployment = document.getElementById('boton-unemployment');
const buttonAlfabet = document.getElementById('boton-alfabetizacion');

const peruTableContainer = document.getElementById('tables-peru');
const mexicoTableContainer = document.getElementById('tables-mexico');
const chileTableContainer = document.getElementById('tables-chile');
const brasilTableContainer = document.getElementById('tables-brasil');

// APLICANDO SORT//
// SELECT
let selectedContainer;// el container por pais
let selectedData;// el tipo de indicador seleccionado

function crearTablaIndicador(indicadores, contenedor) {
  contenedor.innerHTML = ''; // SE LIMPIA LA TABLA//

  let tbl = document.createElement('table');
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);// ESTA VACIO PORQUE NO TIENE TITULO Y AHI VA LONK VER MAS//


  for (indicador of indicadores) {
    // CREAR LINK
    let link = document.createElement('a');
    let linkText = document.createTextNode('Ver');
    link.onclick = function() {
      showDetalle(contenedor, indicador);
    };
    link.href = '#';
    link.appendChild(linkText);

    const average = compute(indicador);
    let row = tbl.insertRow();

    createTableCell(indicador.indicatorName, row);
    createTableCell(average, row);
    row.appendChild(link); // le asigno el elemento <a> de ver mas //
  }
  contenedor.appendChild(tbl);

  selectedContainer = contenedor; // cada vez que se da un clic a un indicaddor se guarda el contenedor
  selectedData = indicadores; // cada vez que se da un clic a un indicaddor se guarda los datos de ese indicador para poder ordenarlo si desea
}

// CRENADO FUNCOIN QUE SE EJECUTA LA CAMBIAR ELV ALOR DEL SELECTOR EN EL HTML//
const selectChangeTextPopulation = (id) => { // RECIBE COMO PARAMETRO EL ID DEL INDICADORS
  let elSelect = document.getElementById(id);
  let selectOp = elSelect.options[elSelect.selectedIndex].text;
  selectedContainer.innerHTML = '';

  let sortedData = sortData(selectedData, selectOp);

  crearTablaIndicador(sortedData, selectedContainer);
};

function CrearEventoTablaIndicador(boton, indicadores, contenedor) {
  boton.addEventListener('click', () => {
    crearTablaIndicador(indicadores, contenedor);
  });
}

CrearEventoTablaIndicador(buttonPopulation, filterPopulationPeru, peruTableContainer);
CrearEventoTablaIndicador(buttonViolence, filterViolencePeru, peruTableContainer);
CrearEventoTablaIndicador(buttonEducation, filterEducationPeru, peruTableContainer);
CrearEventoTablaIndicador(buttonUnemployment, filterUnemploymentPeru, peruTableContainer);
CrearEventoTablaIndicador(buttonAlfabet, filterLiteracyPeru, peruTableContainer);

// ------------------------- MEXICO ----------------------------------- //


// BOTONES MÉXICO
const buttonPopulationMexico = document.getElementById('boton-population-mexico');
const buttonViolenceMexico = document.getElementById('boton-violence-mexico');
const buttonEducationMexico = document.getElementById('boton-education-mexico');
const buttonUnemploymentMexico = document.getElementById('boton-unemployment-mexico');
const buttonAlfabetMexico = document.getElementById('boton-alfabetizacion-mexico');


// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML
CrearEventoTablaIndicador(buttonPopulationMexico, filterPopulationMexico, mexicoTableContainer);
CrearEventoTablaIndicador(buttonViolenceMexico, filterViolenceMexico, mexicoTableContainer);
CrearEventoTablaIndicador(buttonEducationMexico, filterEducationMexico, mexicoTableContainer);
CrearEventoTablaIndicador(buttonUnemploymentMexico, filterUnemploymentMexico, mexicoTableContainer);
CrearEventoTablaIndicador(buttonAlfabetMexico, filterLiteracyMexico, mexicoTableContainer);

// ------------------------- CHILE ----------------------------------- //

// botones CHILE

const buttonPopulationChile = document.getElementById('boton-population-chile');
const ButtonViolenceChile = document.getElementById('boton-violence-chile');
const buttonEducationChile = document.getElementById('boton-education-chile');
const buttonUnemploymentChile = document.getElementById('boton-unemployment-chile');
const buttonAlfabetChile = document.getElementById('boton-alfabetizacion-chile');


// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML
CrearEventoTablaIndicador(buttonPopulationChile, filterPopulationChile, chileTableContainer);
CrearEventoTablaIndicador(ButtonViolenceChile, filterViolenceChile, chileTableContainer);
CrearEventoTablaIndicador(buttonEducationChile, filterEducationChile, chileTableContainer);
CrearEventoTablaIndicador(buttonUnemploymentChile, filterUnemploymentChile, chileTableContainer);
CrearEventoTablaIndicador(buttonAlfabetChile, filterLiteracyChile, chileTableContainer);
// ------------------------- BRASIL ----------------------------------- //

// botones BRASIL
const buttonPopulationBrasil = document.getElementById('boton-population-brasil');
const buttonViolenceBrasil = document.getElementById('boton-violence-brasil');
const buttonEducationBrasil = document.getElementById('boton-education-brasil');
const buttonUnemploymentBrasil = document.getElementById('boton-unemployment-brasil');
const buttonAlfabetBrasil = document.getElementById('boton-alfabetizacion-brasil');

// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML
CrearEventoTablaIndicador(buttonPopulationBrasil, filterPopulationBrasil, brasilTableContainer);
CrearEventoTablaIndicador(buttonViolenceBrasil, filterViolenceBrasil, brasilTableContainer);
CrearEventoTablaIndicador(buttonEducationBrasil, filterEducationBrasil, brasilTableContainer);
CrearEventoTablaIndicador(buttonUnemploymentBrasil, filterUnemploymentBrasil, brasilTableContainer);
CrearEventoTablaIndicador(buttonAlfabetBrasil, filterLiteracyBrasil, brasilTableContainer);

// MENÚ
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});

// TABLA
function createTableCell(value, parent) {
  // inserta una celda en la fila creada
  let newCell = parent.insertCell();

  // añade contenido a la celda
  let text = document.createTextNode(value);
  newCell.appendChild(text);
}

// let resultsPERU = dataForYear.filter(number => number > 1);

const showDetalle = (contenedor, indicador) => {
  contenedor.innerHTML = '';

  let tbl = document.createElement('table');

  let hrow = tbl.insertRow();
  createTableCell('Año', hrow);
  createTableCell('Cantidad', hrow);

  for (let i in indicador.data) {
    let row = tbl.insertRow();
    createTableCell(i, row);
    createTableCell(indicador.data[i], row);
  }

  contenedor.appendChild(tbl);
};
