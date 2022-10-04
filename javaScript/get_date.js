var display = document.querySelector('#horarioHeader');
var displaydate = document.querySelector('#dateHeader');


var agora = new Date();

console.log(agora)

var horario = String(agora.getHours()).padStart(2, '0') + ':' + agora.getMinutes();

console.log(horario)

display.textContent = horario;


//data

var dia = agora.getDate();
var mes = agora.getMonth();
var ano = agora.getFullYear();

var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

var date = (dia + ' de ' + meses[mes] + ' de ' + ano);
displaydate.textContent = date;
