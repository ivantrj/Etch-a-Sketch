const container = document.getElementById("container");
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('gridCell');
let newRows = 16;
let newCells = 16;


defaultGrid();
//creates a default grid with 16x16
function defaultGrid() {
    makeRows(newRows);
    makeColumns(newCells);
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


for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseenter', function() {
        this.style.backgroundColor = "black";
    });
}   

function reset() {
    for(var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
    newRows = window.prompt("Enter new rows dimensions: ")
    newCells = window.prompt("Enter new cells dimensions: ")
    
}

const btnReset = document.getElementById("resetButton");

btnReset.addEventListener('click', reset);


