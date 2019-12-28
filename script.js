const container = document.getElementById("container");
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('gridCell');
let newGrid = 16;

defaultGrid();
eventListener();
//creates a default grid with 16x16
function defaultGrid() {
    makeRows(newGrid);
    makeColumns(newGrid);
}

function makeRows(rowNum) {
    for(var i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
    }
}

function makeColumns(colNum) {
    for(var i = 0; i < rows.length; i++) {
        for(var j = 0; j < colNum; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = 'gridCell';
        }
    }
}



function eventListener() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseenter', function() {
            this.style.backgroundColor = "black";
        });
    } 
}
  

function removeOldGrid() {
    container.innerHTML = '';
  }

function reset() {
    removeOldGrid();
    newGrid = window.prompt("Enter new grid dimensions: ");
    defaultGrid();
    eventListener();
    
}

const btnReset = document.getElementById("resetButton");

btnReset.addEventListener('click', reset);




