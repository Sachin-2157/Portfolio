const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content'); // Select main content

// Open sidebar and shift content
menuBtn.addEventListener('click', function() {
    sidebar.classList.add('active');
    mainContent.style.marginLeft = '250px';  // Shift content to the right
    menuBtn.style.display = 'none';  // Hide menu button when sidebar is open
});

// Close sidebar and reset content margin
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
    mainContent.style.marginLeft = '0';  // Reset content margin
    setTimeout(function() {
        menuBtn.style.display = 'block';  // Show menu button again after sidebar is closed
    }, 300);  // Delay to match the transition duration
});


function toggleProjects() {
    const projectList = document.getElementById('project-list');
    if (projectList.style.display === 'none' || projectList.style.display === '') {
        projectList.style.display = 'flex'; // Show the list
    } else {
        projectList.style.display = 'none'; // Hide the list
    }
}   
