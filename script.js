
let isDrawing = false;
// Detect when the mouse is pressed down
document.addEventListener('mousedown', () => {
    isDrawing = true;
});

// Detect when the mouse is released
document.addEventListener('mouseup', () => {
    isDrawing = false;
});
// Modify the function to only change color when mouse is down

const container = document.querySelector("#container");
const resetButton = document.querySelector("#resetButton");

function createGrid(size){
    const squareSize = 960 / size; 
    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        square.addEventListener('mouseover', changeColor);
        //change color when single square is clicked or first square when dragged
        square.addEventListener('mousedown', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }
}

function changeColor(e) {
    if (isDrawing) {
        e.target.style.backgroundColor = 'black';  // Or any other color logic
    }
}

function resetGrid(){
    alert("reset");
    const squares = document.querySelectorAll('.square');  // Select all elements with class 'square'
    squares.forEach(square => square.remove());
    createGrid(16);
}

resetButton.addEventListener("click", resetGrid);

createGrid(16);

