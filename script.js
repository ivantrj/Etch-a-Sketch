const container = document.getElementById("container");
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('gridCell');


defaultGrid();
//creates a default grid with 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
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

//event listeners for hover effect
document.getElementsByClassName("gridRow").addEventListener("onmouseover", function() {
    rows.style.color = "gray";
});


