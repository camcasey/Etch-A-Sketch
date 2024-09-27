let isDrawing = false;

// Detect when the mouse is pressed down
document.addEventListener('mousedown', () => {
    isDrawing = true;
});

// Detect when the mouse is released
document.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Get references to the container, reset button, and slider
const container = document.querySelector("#container");
const resetButton = document.querySelector("#resetButton");
const gridSizeSlider = document.querySelector("#gridSizeSlider");
const gridSizeValue = document.querySelector("#gridSizeValue");

// Function to create the grid
function createGrid(size){
    container.innerHTML = "";  // Clear the container
    const squareSize = 960 / size;  // Calculate the size of each square
    
    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        
        // Add event listeners for drawing
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mousedown', (e) => {
            e.target.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

// Function to change color while drawing
function changeColor(e) {
    if (isDrawing) {
        e.target.style.backgroundColor = 'black';  // Change the color
    }
}

// Reset grid function
function resetGrid(){
    const size = gridSizeSlider.value;
    createGrid(size);
}

// Update the slider value and grid size when the slider is moved
gridSizeSlider.addEventListener("input", () => {
    gridSizeValue.textContent = gridSizeSlider.value;
    resetGrid();  // Update the grid when the slider changes
});

// Initialize the grid with a default size
createGrid(gridSizeSlider.value);

// Attach reset button functionality
resetButton.addEventListener("click", resetGrid);

