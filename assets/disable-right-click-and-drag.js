// Check if right-click and drag are disabled in local storage
var rightClickDisabled = localStorage.getItem('rightClickDisabled');
var dragAndDropDisabled = localStorage.getItem('dragAndDropDisabled');

// Function to enable right-click and drag
function enableRightClickAndDrag() {
    localStorage.setItem('rightClickDisabled', 'false');
    localStorage.setItem('dragAndDropDisabled', 'false');
}

if (rightClickDisabled !== 'true' && dragAndDropDisabled !== 'true') {
    enableRightClickAndDrag();
}

// Disable right-click on all img elements
function disableRightClick() {
    var imgElements = document.querySelectorAll('img');
    imgElements.forEach(function(img) {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    });
    // Store in local storage that right-click is disabled
    localStorage.setItem('rightClickDisabled', 'true');
}

// Disable drag and drop on all img elements
function disableDragAndDrop() {
    var imgElements = document.querySelectorAll('img');
    imgElements.forEach(function(img) {
        img.setAttribute('draggable', 'false');
    });
    // Store in local storage that drag and drop is disabled
    localStorage.setItem('dragAndDropDisabled', 'true');
}

// Call the functions to disable right-click and drag when the page loads
document.addEventListener('DOMContentLoaded', function() {
    if (rightClickDisabled === 'true') {
        disableRightClick();
    }
    if (dragAndDropDisabled === 'true') {
        disableDragAndDrop();
    }
});
