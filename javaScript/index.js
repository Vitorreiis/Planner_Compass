let data = JSON.parse(localStorage.getItem('data')) ||{
    arraySegunda: [],
    arrayTerca: [],
    arrayQuarta: [],
    arrayQuinta: [],
    arraySexta: [],
    arraySabado: [],
    arrayDomingo: [],
};


const btnSalvar = () =>{
    let dados = JSON.stringify(data);
    localStorage.setItem('data', dados);
}

const btnExcluir = () => {
    localStorage.removeItem('data')
}


const criarCard = (idDay) => {

    let dia = [];

    if (idDay == "segunda") {
        dia = [...data.arraySegunda];
    }
    if (idDay == "terca") {
        dia = [...data.arrayTerca];
    }
    if (idDay == "quarta") {
        dia = [...data.arrayQuarta];
    }
    if (idDay == "quinta") {
        dia = [...data.arrayQuinta];
    }
    if (idDay == "sexta") {
        dia = [...data.arraySexta];
    }
    if (idDay == "sabado") {
        dia = [...data.arraySabado];
    }
    if (idDay == "domingo") {
        dia = [...data.arrayDomingo];
    }

    const containerCard = document.getElementById('containerCards');
    containerCard.innerHTML = '';

    const containerHorario = document.getElementById('containerHorarios');
    containerHorario.innerHTML = '';

    dia.forEach(containerDia => {
        if(!containerDia.renderizado){

        const horario = document.createElement('li');
        horario.innerHTML = `
       <div class="planner-horario-interno__card ${idDay}" style="background: ${containerDia.color};">
           <h2 class="horario-interno__card">${containerDia.horario}</h2>
       </div>
       `
        document.getElementById('containerHorarios').appendChild(horario);

        const card = document.createElement('li');
        card.classList.add('container-cards-interno__main');
            card.innerHTML = `
           <div class="card__planner ${idDay}" id="cardItem">
               <div class="texto-button__card-interno">
                   <p class="texto-card__main" id="textoDigitado">${containerDia.card}</p>
                   <input class="button-card__main" type="button" value="Apagar" data-indice=${containerDia.indice}></input>
               </div>
           </div>
       `
        
        for(let i = 0; i < dia.length; i++){
            if(!dia[i].renderizado){
            if((containerDia.horario == dia[i].horario) 
            && (containerDia.indice != dia[i].indice)){
                card.classList.add('choqueHorario');
                horario.classList.add('choqueHorario');
                card.innerHTML+=
                    `
                        <div class="card__planner" id="cardItem">
                            <div class="texto-button__card-interno">
                                <p class="texto-card__main" id="textoDigitado">${dia[i].card}</p>
                                <input class="button-card__main" type="button" value="Apagar" data-indice=${dia[i].indice}></input>
                            </div>
                        </div>
                    `
                dia[i].renderizado = true;
            }
            }
        }
        containerCard.appendChild(card);
    }  
    })
    for (const key in data) {
        data[key].forEach(element => {
            delete element.renderizado;
        })
    }
}

function addClicado (element) {
    document.querySelectorAll('.dia__semana').forEach(item => {
        item.classList.remove('clicado')
    })
    element.classList.add('clicado');
}


const refreshScreen = (dia) => {

    console.log('Dia linha 1', dia)
    /*let dia1 = [];


    if (dia == "segunda") {
        dia1 = [...data.arraySegunda];
    }
    if (dia == "terca") {
        dia1 = [...data.arrayTerca];
    }
    if (dia == "quarta") {
        dia1 = [...data.arrayQuarta];
    }
    if (dia == "quinta") {
        dia1 = [...data.arrayQuinta];
    }
    if (dia == "sexta") {
        dia1 = [...data.arraySexta];
    }
    if (dia == "sabado") {
        dia1 = [...data.arraySabado];
    }
    if (dia == "domingo") {
        dia1 = [...data.arrayDomingo];
    }*/

    /*const containerCard = document.getElementById('containerCards');
    containerCard.innerHTML = '';

    const containerHorario = document.getElementById('containerHorarios');
    containerHorario.innerHTML = '';*/

    console.log(dia)
    criarCard(dia);

    /*dia1.forEach(containerDia => {
        const horario = document.createElement('li');
        horario.innerHTML = `
       <div class="planner-horario-interno__card" style="background: ${containerDia.color};">
           <h2 class="horario-interno__card">${containerDia.horario}</h2>
       </div>
       `
        document.getElementById('containerHorarios').appendChild(horario);
        console.log('Erro', horario);

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
    })*/
}

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

    if (dia == 'Segunda-feira') {
        data.arraySegunda.push({ 'card': textoCard, horario, indice, dia, 'color': colorSegunda });
        criarCard('segunda');
        inputAtividade.value = '';
        inputDiaSemana.value = 'domingo-semana';
        inputHorario.value = '00:00';
        addClicado(document.querySelector('[id-day= segunda]'))

    } else if (dia == 'Terça-feira') {
        data.arrayTerca.push({ 'card': textoCard, horario, indice, dia, 'color': colorTerca });
        criarCard('terca');
        inputAtividade.value = '';
        inputDiaSemana.value = 'domingo-semana';
        inputHorario.value = '00:00';
        addClicado(document.querySelector('[id-day= terca]'))
    }
    else if (dia == 'Quarta-feira') {
        data.arrayQuarta.push({ 'card': textoCard, horario, indice, dia, 'color': colorQuarta });
        criarCard('quarta');
        inputAtividade.value = '';
        inputDiaSemana.value = 'domingo-semana';
        inputHorario.value = '00:00';
        addClicado(document.querySelector('[id-day= quarta]'))
    }
    else if (dia == 'Quinta-feira') {
        data.arrayQuinta.push({ 'card': textoCard, horario, indice, dia, 'color': colorQuinta });
        criarCard('quinta');
        inputAtividade.value = '';
        inputDiaSemana.value = 'domingo-semana';
        inputHorario.value = '00:00';
        addClicado(document.querySelector('[id-day= quinta]'))    }
    else if (dia == 'Sexta-feira') {
        data.arraySexta.push({ 'card': textoCard, horario, indice, dia, 'color': colorSexta });
        criarCard('sexta');
        inputAtividade.value = '';
        inputDiaSemana.value = 'domingo-semana';
        inputHorario.value = '00:00';
        addClicado(document.querySelector('[id-day= sexta]'))
    }
    else if (dia == 'Sábado') {
        data.arraySabado.push({ 'card': textoCard, horario, indice, dia, 'color': colorSabado });
        criarCard('sabado');
        inputAtividade.value = '';
        inputDiaSemana.value = 'domingo-semana';
        inputHorario.value = 'h1';
        addClicado(document.querySelector('[id-day= sabado]'))

    }
    else if (dia == 'Domingo') {
        data.arrayDomingo.push({ 'card': textoCard, horario, indice, dia, 'color': colorDomingo });
        criarCard('domingo');
        inputAtividade.value = '';
        inputDiaSemana.value = 'domingo-semana';
        inputHorario.value = 'h1';
        addClicado(document.querySelector('[id-day= domingo]'))
    }
}

const removerItem = (index, dia) => {
    for (let dia in data) {
        data[dia].forEach((cdia, i) => {
            if (cdia.indice == index) {
                console.log(cdia)
                console.log('antes do splice', data[dia])
                data[dia].splice(i, 1);
                console.log('depois do splice', data[dia])
            }
        })
    }
    criarCard(checkDia());
}

/*for (const key in data) {
    data[key].forEach(element => {
        delete element.renderizado;
    })
}*/

const excluirTodos = () => {
    let dia = checkDia();

    if (dia == "segunda") {
        data.arraySegunda = [];
    }
    if (dia == "terca") {
        data.arrayTerca = [];
    }
    if (dia == "quarta") {
        data.arrayQuarta = [];
    }
    if (dia == "quinta") {
        data.arrayQuinta = [];
    }
    if (dia == "sexta") {
        data.arraySexta = [];
    }
    if (dia == "sabado") {
        data.arraySabado = [];
    }
    if (dia == "domingo") {
        data.arrayDomingo = [];
    }

    criarCard(dia);
}

function checkDia (){
    const dia = document.querySelector('.clicado').getAttribute('id-day');
    return dia;
}

function clickItem(evento) {
    const elemento = evento.target;
    if (elemento.type == 'button') {
        const indice = elemento.dataset.indice;
        console.log(indice);
        removerItem(indice);
    }
}

document.getElementById('containerCards').addEventListener('click', clickItem);
document.querySelector('#addTarefa').addEventListener('click', cadastrarNovaTarefa);
document.querySelector('#excluirTarefa').addEventListener('click', excluirTodos);
document.querySelector('#salvar').addEventListener('click', btnSalvar)
document.querySelector('#excluir').addEventListener('click', btnExcluir)

document.querySelector('.dia-segunda__color').addEventListener('click', (e) => {
    criarCard(e.target.getAttribute('id-day'))
    addClicado(e.target);
});
document.querySelector('.dia-terca__color').addEventListener('click', (e) => {
    criarCard(e.target.getAttribute('id-day'))
    addClicado(e.target);
});
document.querySelector('.dia-quarta__color').addEventListener('click', (e) => {
    criarCard(e.target.getAttribute('id-day'))
    addClicado(e.target);
});
document.querySelector('.dia-quinta__color').addEventListener('click', (e) => {
    criarCard(e.target.getAttribute('id-day'))
    addClicado(e.target);
});
document.querySelector('.dia-sexta__color').addEventListener('click', (e) => {
    criarCard(e.target.getAttribute('id-day'))
    addClicado(e.target);
});
document.querySelector('.dia-sabado__color').addEventListener('click', (e) => {
    criarCard(e.target.getAttribute('id-day'))
    addClicado(e.target);
});
document.querySelector('.dia-domingo__color').addEventListener('click', (e) => {
    criarCard(e.target.getAttribute('id-day'))
    addClicado(e.target);
});