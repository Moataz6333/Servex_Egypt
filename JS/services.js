document.querySelector('.dropdown-button').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the window
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});