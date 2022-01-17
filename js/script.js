console.log('JS OK!')

/* L'utente indica TRAMITE DOM un livello di difficoltà
in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

// 1- Creare delle function neutre

const number = (num) => {
    let number = '';

    for (let i = 1; i <= num; i++) {
        number += [i];
    }

    return number;
}

const cells = (cell) => {
    let cells;

    for (let i = 1; i <= cell; i++) {
        cells += [i];
    }

    return cells;
}

// 2- Creare delle costanti di appoggio

const difficultyChoice = document.getElementById('difficulty-choice');
const grid = document.getElementById('grid');
const btn = document.getElementById('btn');

// 3- Creare un menu' con opzioni multiple

const option1 = document.createElement('option')
option1.id = 'option-1'
option1.innerHTML = 'Facile';
difficultyChoice.appendChild(option1);

const option2 = document.createElement('option')
option2.id = 'option-2'
option2.innerHTML = 'Medio';
difficultyChoice.appendChild(option2);

const option3 = document.createElement('option')
option3.id = 'option-3'
option3.innerHTML = 'Difficile';
difficultyChoice.appendChild(option3);


// 4- Celle Difficoltà 1

const cellsEasy = 10;
const columnsEasy = 10;
const totalCellsEasy = cellsEasy * columnsEasy;

// 2- Celle Difficoltà 2

const cellsMedium = 9;
const columnsMedium = 9;
const totalCellsMedium = cellsMedium * columnsMedium;

// 3- Celle Difficoltà 3

const cellsHard = 7;
const columnsHard = 7;
const totalCellsHard = cellsHard * columnsHard;

// 4- Celle

btn.addEventListener ('click', function(){
if (option1) {
    for (let i = 0; i < totalCellsEasy; i++) {
        const cell = document.createElement('div');
        cell.className = 'cells-easy';
        grid.appendChild(cell);
    }
} else if (option2) {
    for (let i = 0; i < totalCellsMedium; i++) {
        const cell = document.createElement('div');
        cell.className = 'cells-medium';
        grid.appendChild(cell);
    }
} else if (option3) {
    for (let i = 0; i < totalCellsHard; i++) {
        const cell = document.createElement('div');
        cell.className = 'cells-hard';
        grid.appendChild(cell);
    }
}
})
