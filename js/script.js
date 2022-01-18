console.log('JS OK!')

/* L'utente indica TRAMITE DOM un livello di difficoltà
in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

// 1- Creare delle function neutre

const cells = (num1, num2) => {
    let result;

    const cells = num1;
    const column = num2;
    const total = cells * column;

    result = total;

    return result;
}

// 2- Creare delle costanti di appoggio

const difficultyChoice = document.getElementById('difficulty-choice');
const grid = document.getElementById('grid');
const btnSend = document.getElementById('btn-send');
const btnCancel = document.getElementById('btn-cancel');

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

// 4- Condizione dimensione celle

btnSend.addEventListener ('click', () => { 

    grid.innerText = '';
    let result;
    let resultNumber;
    
    if (difficultyChoice.value === 'Facile') {
        result = cells(10, 10);
        } else if (difficultyChoice.value === 'Medio') {
            result = cells(9, 9);
        } else if (difficultyChoice.value === 'Difficile') {
            result = cells(7, 7);
        }
        for (let i = 1; i <= result; i++) {
            const cell = document.createElement('div');
            if (difficultyChoice.value === 'Facile') {
                cell.className = 'cells-easy';
                resultNumber = [i];
                console.log(resultNumber)
            } else if (difficultyChoice.value === 'Medio') {
                cell.className = 'cells-medium';
                resultNumber = [i];
                console.log(resultNumber)
            } else if (difficultyChoice.value === 'Difficile') {
                cell.className = 'cells-hard';
                resultNumber = [i];
                console.log(resultNumber)
            }
            grid.appendChild(cell);
            cell.innerHTML = resultNumber;
                        
            cell.addEventListener('click', () => {
            cell.classList.toggle('clicked');
            console.log(cell);
        }) 
    }
})