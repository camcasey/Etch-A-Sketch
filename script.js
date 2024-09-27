let isDrawing = false;
let bordersOn = true;
let currentColor = "#000000";  // Default color is black

// Detect when the mouse is pressed down
document.addEventListener('mousedown', () => {
    isDrawing = true;
});

// Detect when the mouse is released
document.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Get references to the container, reset button, slider, and color picker
const container = document.querySelector("#container");
const resetButton = document.querySelector("#resetButton");
const borderButton = document.querySelector("#borderButton");
const gridSizeSlider = document.querySelector("#gridSizeSlider");
const gridSizeValue = document.querySelector("#gridSizeValue");
const colorPicker = document.querySelector("#colorPicker");
let size = 0;

// Update the current color when the user selects a new color
colorPicker.addEventListener("input", (e) => {
    currentColor = e.target.value;
});

// Function to create the grid
function createGrid(size){
    container.innerHTML = "";  // Clear the container
    const squareSize = 720 / size;  // Calculate the size of each square
    
    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';

        // Apply the border if bordersOn is true
        if (bordersOn) {
            square.style.border = "1px solid grey";
        } else {
            square.style.border = "none";
        }
        
        // Add event listeners for drawing
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mousedown', (e) => {
            e.target.style.backgroundColor = currentColor;
        });

        container.appendChild(square);
    }
}

// Function to change color while drawing
function changeColor(e) {
    if (isDrawing) {
        e.target.style.backgroundColor = currentColor;  // Change the color to the selected color
    }
}

// Reset grid function
function resetGrid(){
    size = gridSizeSlider.value;
    createGrid(size);
}

// Function to toggle the borders on and off
function toggleBorders(){
    bordersOn = !bordersOn;  // Toggle the bordersOn flag
    const squares = document.querySelectorAll('.square');  // Select all square elements
    squares.forEach(square => {
        if (bordersOn) {
            square.style.border = "1px solid grey";
        } else {
            square.style.border = "none";
        }
    });
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

// Attach border button functionality
borderButton.addEventListener("click", toggleBorders);