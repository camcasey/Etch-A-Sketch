
let isDrawing = false;
const container = document.querySelector("#container");
const resetButton = document.querySelector("#resetButton");

function createGrid(size){
    const squareSize = 960 / size; 
    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.textContent = i;
        square.classList.add("square");
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        container.appendChild(square);
    }
}


function resetGame(){
    alert("reset");
}

resetButton.addEventListener("click", resetGame);

createGrid(10);

