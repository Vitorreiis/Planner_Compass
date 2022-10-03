let data = [
]

const criarCard = (data, indice) => {

    const horario = document.createElement('li');
    horario.innerHTML = `
    <div class="planner-horario-interno__card">
        <h2 class="horario-interno__card">${data.horario}</h2>
    </div>
    `
    document.getElementById('containerHorarios').appendChild(horario);

    const card = document.createElement('li');
    card.classList.add('container-cards-interno__main');
    card.innerHTML = `
        <div class="card__planner" id="cardItem">
            <div class="border-card__main"></div>
            <div class="texto-button__card-interno">
                <p class="texto-card__main" id="textoDigitado">${data.card}</p>
                <input class="button-card__main" type="button" value="Apagar" data-indice=${indice}></input>
            </div>
        </div>
    `
    document.getElementById('containerCards').appendChild(card);
}

const limparCards = () => {
    const containerCards = document.getElementById('containerCards');
    while(containerCards.firstChild){
        containerCards.removeChild(containerCards.lastChild);
    }

    const containerHorarios = document.getElementById('containerHorarios');
    while(containerHorarios.firstChild){
        containerHorarios.removeChild(containerHorarios.lastChild);
    }
}

const refreshScreen = () => {
    limparCards();
    data.forEach ((textoCard, indice) => criarCard(textoCard, indice));
}

refreshScreen();

const cadastrarNovaTarefa = () => {
    const inputAtividade = document.querySelector('#atividade');
    const textoCard = inputAtividade.value; 

    const selectHorario = document.querySelector('#horario');
    const optionText = selectHorario.options[selectHorario.selectedIndex];

    const horario = optionText.text;

        data.push({'card': textoCard, horario});
        refreshScreen();
        inputAtividade.value = '';
}

const removerItem = (indice) => {
    data.splice(indice, 1);
    refreshScreen();
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