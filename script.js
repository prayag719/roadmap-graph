// script.js

// Function to show HTML content in the sidebar
function showHTMLInfo() {
    // Hide all content divs initially
    document.querySelectorAll('.sidebar-content > div').forEach((content) => {
        content.style.display = 'none';
    });

    // Show the HTML content
    const htmlInfo = document.getElementById('html-info');
    htmlInfo.style.display = 'block';

    // Open the sidebar
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('sidebar-open');
}

// Add click event listener for "Child 2 - HTML"
const htmlLink = document.querySelector('a[href="#"]');
htmlLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    showHTMLInfo();
});
