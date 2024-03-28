// Select the element with the ID 'light-mode' and assign it to the variable modeBtn
const modeBtn = document.querySelector('#light-mode');
// Select the body element and assign it to the variable bodyEl
const bodyEl = document.querySelector('body');
// Initialize the variable pageMode
let pageMode = '';

// Event listener for the light mode button
modeBtn.addEventListener('click', function() {
    // Check if body element has 'dark' class
    if (bodyEl.classList.contains('dark')) {
        // If it does, remove 'dark' class from body element
        bodyEl.classList.remove('dark');
        // Change text content of modeBtn to sun emoji
        modeBtn.textContent = '🌞';
        // Set pageMode to '🌞'
        pageMode = '🌞';
    } else {
        // If 'dark' class is not present, add it to body element
        bodyEl.classList.add('dark');
        // Change text content of modeBtn to moon emoji
        modeBtn.textContent = '🌚';
        // Set pageMode to '🌚'
        pageMode = '🌚';
    }
    // Store the current mode in local storage
    localStorage.setItem('mode', pageMode);
});

// Function to initialize the page mode
function init() {
    // Retrieve the page mode from local storage
    pageMode = localStorage.getItem('mode');
    // Check if the page mode is set to dark
    if (pageMode === '🌚') {
        // If it is, add 'dark' class to body element and change button text to moon emoji
        bodyEl.classList.add('dark');
        modeBtn.textContent = '🌚';
    } else {
        // If not, remove 'dark' class from body element and change button text to sun emoji
        bodyEl.classList.remove('dark');
        modeBtn.textContent = '🌞';
    }
}

// Call the init function to initialize the page mode
init();