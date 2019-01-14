/* eslint-disable no-undef */
// MENÚ DE NAVEGACIÓN
const inicial = document.getElementById('contenedor');
const per = document.getElementById('pagina-peru');
const mex = document.getElementById('pagina-mexico');
const chl = document.getElementById('pagina-chile');
const brsl = document.getElementById('pagina-brasil');

const inicialb = document.getElementById('inicio');
const perub = document.getElementById('peru-menu');
const mexb = document.getElementById('mexico-menu');
const chlb = document.getElementById('chile-menu');
const brslb = document.getElementById('brasil-menu');

// PANTALLA INICIO
inicialb.addEventListener('click', () => {
  inicial.style.display = 'block';
  per.style.display = 'none';
  mex.style.display = 'none';
  chl. style.display = 'none';
  brsl.style.display = 'none';
});
// PANTALLA PERÚ
perub.addEventListener('click', () => {
  inicial.style.display = 'none';
  per.style.display = 'block';
  mex.style.display = 'none';
  chl. style.display = 'none';
  brsl.style.display = 'none';
});
// PANTALLA MÉXICO
mexb.addEventListener('click', () => {
  inicial.style.display = 'none';
  per.style.display = 'none';
  mex.style.display = 'block';
  chl. style.display = 'none';
  brsl.style.display = 'none';
});
// PANTALLA CHILE
chlb.addEventListener('click', () => {
  inicial.style.display = 'none';
  per.style.display = 'none';
  mex.style.display = 'none';
  chl. style.display = 'block';
  brsl.style.display = 'none';
});
// PANTALLA BRASIL
brslb.addEventListener('click', () => {
  inicial.style.display = 'none';
  per.style.display = 'none';
  mex.style.display = 'none';
  chl. style.display = 'none';
  brsl.style.display = 'block';
});

// se da click en el boton de la pantalla inicio para cuando empiece el proyecto
inicialb.click();

// ------------------------- PERÚ ----------------------------------- //

// BOTONES PERÚ

const btnPopulation = document.getElementById('boton-population');
const btnViolence = document.getElementById('boton-violence');
const btnEducation = document.getElementById('boton-education');
const btnUnemployment = document.getElementById('boton-unemployment');
const btnAlfabet = document.getElementById('boton-alfabetizacion');

const peruTableContainer= document.getElementById("tables-peru");
const mexicoTableContainer= document.getElementById("tables-mex");
const chilTableContainer= document.getElementById("tables-chile");
const brasilTableContainer= document.getElementById("tables-brasil");


// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML

btnPopulation.addEventListener('click', () => {
  peruTableContainer.innerHTML = '';

  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);


  for (indicador of filterPopPer) {
	  //CREAR LINK
		let link = document.createElement('a');
		let linkText = document.createTextNode("Ver");
		link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
		link.href = "#";
		link.appendChild(linkText);

      const average = compute(indicador);
      let row = tbl.insertRow();

      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
	  row.appendChild(link);

  }
  peruTableContainer.appendChild(tbl);
});

btnViolence.addEventListener('click', () => {
  peruTableContainer.innerHTML = '';

  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);


  for (indicador of filterViolencePer) {
    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  peruTableContainer.appendChild(tbl);

});

btnEducation.addEventListener('click', () => {
  peruTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterEduPer) {
    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  peruTableContainer.appendChild(tbl);

});

btnUnemployment.addEventListener('click', () => {
  peruTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterUnemploymentPer) {
    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  peruTableContainer.appendChild(tbl);

});

btnAlfabet.addEventListener('click', () => {
  peruTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterLiteracyPer) {

    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  peruTableContainer.appendChild(tbl);

});

// ------------------------- MEXICO ----------------------------------- //


// BOTONES MÉXICO
const btnPopMex = document.getElementById('boton-populationMex');
const btnVioMex = document.getElementById('boton-violenceMex');
const btnEduMex = document.getElementById('boton-educationMex');
const btnUneMex = document.getElementById('boton-unemploymentMex');
const btnAlfMex = document.getElementById('boton-alfabetizacionMex');


// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML

btnPopMex.addEventListener('click', () => {
  mexicoTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterPopMex) {
    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);


  }
  mexicoTableContainer.appendChild(tbl);

});

btnVioMex.addEventListener('click', () => {
  mexicoTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterViolenceMex) {

    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);


  }
  mexicoTableContainer.appendChild(tbl);

});

btnEduMex.addEventListener('click', () => {
  mexicoTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterEduMex) {
    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);


  }
  mexicoTableContainer.appendChild(tbl);

});

btnUneMex.addEventListener('click', () => {
  mexicoTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterUnemploymentMex) {

    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  mexicoTableContainer.appendChild(tbl);

});

btnAlfMex.addEventListener('click', () => {
  mexicoTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterLiteracyMex) {
    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  mexicoTableContainer.appendChild(tbl);

});


// ------------------------- CHILE ----------------------------------- //

// botones CHILE

const btnPopCh = document.getElementById('boton-populationChil');
const btnVioCh = document.getElementById('boton-violenceChil');
const btnEduCh = document.getElementById('boton-educationChil');
const btnUnemCh = document.getElementById('boton-unemploymentChil');
const btnAlfCh = document.getElementById('boton-alfabetizacionChil');


// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML


btnPopCh.addEventListener('click', () => {
  chilTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterPopChl) {

    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  chilTableContainer.appendChild(tbl);

});

btnVioCh.addEventListener('click', () => {
  chilTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterViolenceChl) {

    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  chilTableContainer.appendChild(tbl);

});

btnEduCh.addEventListener('click', () => {
  chilTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterEduChl) {

    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  chilTableContainer.appendChild(tbl);

});

btnUnemCh.addEventListener('click', () => {
  chilTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterUnemploymentChl) {
    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  chilTableContainer.appendChild(tbl);

});

btnAlfCh.addEventListener('click', () => {
  chilTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterLiteracyChl) {
    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  chilTableContainer.appendChild(tbl);

});


// ------------------------- BRASIL ----------------------------------- //

// botones BRASIL

const btnPopBra = document.getElementById('boton-populationBra');
const btnVioBra = document.getElementById('boton-violenceBra');
const btnEduBra = document.getElementById('boton-educationBra');
const btnUnemBra = document.getElementById('boton-unemploymentBra');
const btnAlfBra = document.getElementById('boton-alfabetizacionBra');

// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML


btnPopBra.addEventListener('click', () => {
  brasilTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterPopBrs) {

    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);


  }
  brasilTableContainer.appendChild(tbl);

});

btnVioBra.addEventListener('click', () => {

  brasilTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterViolenceBrs) {

    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);


  }
  brasilTableContainer.appendChild(tbl);

});

btnEduBra.addEventListener('click', () => {
  brasilTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterEduBrs) {

    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  brasilTableContainer.appendChild(tbl);

});

btnUnemBra.addEventListener('click', () => {
  brasilTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterUnemploymentBrs) {

    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  brasilTableContainer.appendChild(tbl);

});


btnAlfBra.addEventListener('click', () => {
  brasilTableContainer.innerHTML = '';
  let tbl = document.createElement("table");
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);

  for (indicador of filterLiteracyBrs) {
    let link = document.createElement('a');
    let linkText = document.createTextNode("Ver");
    link.onclick = function () { showDetalle(code = indicador.indicatorCode); };
    link.href = "#";
    link.appendChild(linkText);

    const average = compute(indicador);
      let row = tbl.insertRow();
      createTableCell(indicador.indicatorName, row);
      createTableCell(average, row);
      row.appendChild(link);

  }
  brasilTableContainer.appendChild(tbl);

});

// MENÚ
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});





function createTableCell(value, parent) {
    // inserta una celda en la fila creada
    var newCell = parent.insertCell();

    //añade contenido a la celda
    var text = document.createTextNode(value)
    newCell.appendChild(text);
}


function showDetalle(code) {
	peruTableContainer.innerHTML = ''
	let tbl = document.createElement("table");

    let hrow = tbl.insertRow();
    createTableCell('Año', hrow);
    createTableCell('Cantidad', hrow);
	//
    for (indicador of filterPopPer) {
	  if(indicador.indicatorCode==code){
		for(let i in indicador.data){
			let row = tbl.insertRow();
			createTableCell(i, row);
			createTableCell(indicador.data[i], row);
		  }
	  }

    }    peruTableContainer.appendChild(tbl);
    }
