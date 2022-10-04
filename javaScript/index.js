let data = {
    arraySegunda : [],
    arrayTerca : [],
    arrayQuarta : [],
    arrayQuinta : [],
    arraySexta : [],
    arraySabado : [],
    arrayDomingo : [],
};


const salvar = () => {
    localStorage.setItem('data', JSON.stringify(data));
    data = JSON.parse(localStorage.getItem('data'))
}

salvar();

const criarCard = (element) => {

   const button = element.target.getAttribute('id-day');
   console.log(button)

   let dia = [];

   if(button == "segunda"){
       dia = [...data.arraySegunda];
   }
   if(button == "terca"){
       dia = [...data.arrayTerca];
   }
   if(button == "quarta"){
       dia = [...data.arrayQuarta];
   }
   if(button == "quinta"){
       dia = [...data.arrayQuinta];
   }
   if(button == "sexta"){
       dia = [...data.arraySexta];
   }
   if(button == "sabado"){
       dia = [...data.arraySabado];
   }
   if(button == "domingo"){
       dia = [...data.arrayDomingo];
   }

   const containerCard = document.getElementById('containerCards');
   containerCard.innerHTML = '';

   const containerHorario = document.getElementById('containerHorarios');
   containerHorario.innerHTML = '';

   dia.forEach(containerDia => {
       const horario = document.createElement('li');
       horario.innerHTML = `
       <div class="planner-horario-interno__card" style="background: ${containerDia.color};">
           <h2 class="horario-interno__card">${containerDia.horario}</h2>
       </div>
       `
       document.getElementById('containerHorarios').appendChild(horario);
   
       const card = document.createElement('li');
       card.classList.add('container-cards-interno__main');
       card.innerHTML = `
           <div class="card__planner" id="cardItem">
               <div class="border-card__main"></div>
               <div class="texto-button__card-interno">
                   <p class="texto-card__main" id="textoDigitado">${containerDia.card}</p>
                   <input class="button-card__main" type="button" value="Apagar" data-indice=${containerDia.indice}></input>
               </div>
           </div>
       `
       containerCard.appendChild(card);
   })

}

document.querySelector('.dia-segunda__color').addEventListener('click', criarCard);
document.querySelector('.dia-terca__color').addEventListener('click', criarCard);
document.querySelector('.dia-quarta__color').addEventListener('click', criarCard);
document.querySelector('.dia-quinta__color').addEventListener('click', criarCard);
document.querySelector('.dia-sexta__color').addEventListener('click', criarCard);
document.querySelector('.dia-sabado__color').addEventListener('click', criarCard);
document.querySelector('.dia-domingo__color').addEventListener('click', criarCard);


const refreshScreen = () => {
    
}

refreshScreen();

const cadastrarNovaTarefa = () => {
const inputDiaSemana = document.querySelector('#diaSemana');
const inputHorario = document.querySelector('#horario');
const inputAtividade = document.querySelector('#atividade');
const textoCard = inputAtividade.value; 

const selectHorario = document.querySelector('#horario');
const optionText = selectHorario.options[selectHorario.selectedIndex];

const horario = optionText.text;

const selectDia = document.querySelector('#diaSemana');
const optionDia = selectDia.options[selectDia.selectedIndex];

const dia = optionDia.text;

const indice = Math.floor(Math.random() * 100);

const colorSegunda = '#FFA246';
const colorTerca = '#35E185';
const colorQuarta = '#6688FF';
const colorQuinta = '#B266FF';
const colorSexta = '#66D1FF';
const colorSabado = '#FF66D4';
const colorDomingo = '#FF6666';

if(inputAtividade == null){
    alert('Preencha o formulário')
}

if(dia == 'Segunda-feira'){
   data.arraySegunda.push({'card': textoCard, horario, indice, dia, 'color': colorSegunda})
   refreshScreen();
   inputAtividade.value = '';
   inputDiaSemana.value = 'domingo-semana';
   inputHorario.value= 'h1';

} else if(dia == 'Terça-feira'){
   data.arrayTerca.push({'card': textoCard, horario,indice, dia, 'color': colorTerca});
   refreshScreen();
   inputAtividade.value = '';
   inputDiaSemana.value = 'domingo-semana';
   inputHorario.value= 'h1';
}
else if(dia == 'Quarta-feira'){
   data.arrayQuarta.push({'card': textoCard, horario,indice, dia, 'color': colorQuarta});
   refreshScreen();
   inputAtividade.value = '';
   inputDiaSemana.value = 'domingo-semana';
   inputHorario.value= 'h1';
}
else if(dia == 'Quinta-feira'){
   data.arrayQuinta.push({'card': textoCard, horario,indice, dia, 'color': colorQuinta});
   refreshScreen();
   inputAtividade.value = '';
   inputDiaSemana.value = 'domingo-semana';
   inputHorario.value= 'h1';
}
else if(dia == 'Sexta-feira'){
   data.arraySexta.push({'card': textoCard, horario,indice, dia, 'color': colorSexta});
   refreshScreen();
   inputAtividade.value = '';
   inputDiaSemana.value = 'domingo-semana';
   inputHorario.value= 'h1';
}
else if(dia == 'Sábado'){
   data.arraySabado.push({'card': textoCard, horario,indice, dia, 'color': colorSabado});
   refreshScreen();
   inputAtividade.value = '';
   inputDiaSemana.value = 'domingo-semana';
   inputHorario.value= 'h1';

}
else if(dia == 'Domingo'){
   data.arrayDomingo.push({'card': textoCard, horario,indice, dia, 'color': colorDomingo});
   refreshScreen();
   inputAtividade.value = '';
   inputDiaSemana.value = 'domingo-semana';
   inputHorario .value= 'h1';
}
}

const removerItem = (index) => {
for (const dia in data) {
 data[dia].forEach((cdia, i) => {
   if(cdia.indice == index){
       data[dia].splice(i,1);
   }
 })
}
}

function clickItem (evento) {
const elemento = evento.target;
if(elemento.type == 'button'){
   const indice = elemento.dataset.indice;
   removerItem(indice);
}
}

document.getElementById('containerCards').addEventListener('click', clickItem);
document.querySelector('#addTarefa').addEventListener('click', cadastrarNovaTarefa);