const container = document.querySelector('#container');
let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

function reset() {
    document
      .querySelectorAll(".appear")
      .forEach((e) => e.parentNode.removeChild(e)); //For each grid, remove from container div
  }

function originalGrid() { //16x16 grid
    for (i = 0; i < 256; i++) {
        const gridPiece = document.createElement('div');
        gridPiece.classList.add('appear'); // to remove in reset() function
        gridPiece.classList.add('black');
        container.classList.add('original');
        gridPiece.addEventListener('mouseover', function(e){
            gridPiece.classList.remove('black');
            gridPiece.classList.add('blue'); 
        }) 
        container.appendChild(gridPiece);
    }
}

function createGrid(number) {
    reset();
    number = prompt("Pick your grid!");
    if (number > 100) { //Forces user to select lower number
        createGrid();
    }
    const squared = number * number;
    for (i = 0; i < squared; i++) {
        const gridPiece = document.createElement('div');
        gridPiece.classList.add('appear');
        gridPiece.classList.add('black');
        container.classList.add('custom');
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`; //Only difference between .custom and .original
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        gridPiece.addEventListener('mouseover', function(e){ 
            gridPiece.classList.remove('black');
            gridPiece.classList.add('blue'); 
        }) 
        container.appendChild(gridPiece);
    }
}

function colorGrid(number) {
    reset();
    number = prompt("Pick your grid!")
    if (number > 100) {
        colorGrid();
    }
    const squared = number * number;
    for (i = 0; i < squared; i++) {
        const gridPiece = document.createElement('div');
        gridPiece.classList.add('appear');
        gridPiece.classList.add('black');
        container.classList.add('custom');
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        gridPiece.addEventListener('mouseover', function(e){ 
            gridPiece.classList.remove('black');
            gridPiece.style.backgroundColor = `${randomColor}`;
        })
        container.appendChild(gridPiece);
    }
}

const customButton = document.querySelector('#pick');
customButton.addEventListener('click', createGrid);

const colorButton = document.querySelector('#colorful');
colorButton.addEventListener('click', colorGrid);

originalGrid();