document.addEventListener('DOMContentLoaded', () => {
    const courseTitles = document.querySelectorAll('.course-title'); // Select course titles
    const courseDetails = document.querySelectorAll('.course-details'); // Select course details
    const yearRow = document.querySelectorAll('.year-row'); // Select year rows
    const yearInfo = document.querySelectorAll('.year-info'); // Select year info sections
    const buttons = document.querySelectorAll('.buttonStyle');

    courseTitles.forEach(title => { // Loop through each course title
        title.addEventListener('click', function(event) {
            // console.log(`click title`);
            event.stopPropagation(); // Prevent event from propagating to parent elements
            if (event.target.classList.contains('year-row')) {
                return; // Prevent toggle if the click originated from a year-row
            }
            const courseId = this.getAttribute('data-course'); // Get course ID from data attribute
            yearInfo.forEach(info => {
                info.style.display = 'none'; // Hide all year info
            });
            courseDetails.forEach(detail => {
                if (detail.id === `${courseId}-details`) { // Only the correct one affected and not yet open
                    detail.classList.toggle('hidden'); // Show matching course details
                }
            });
        });
    });

    yearRow.forEach(row => { // Loop through each year row
        row.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event from propagating to parent elements
            const yearId = this.getAttribute('data-row'); // Get year ID from data attribute
            yearInfo.forEach(info => {
                if (info.id === yearId + '-info' && info.style.display !== 'table-row-group') {
                    info.style.display = 'table-row-group'; // Show matching year info
                } else {
                    info.style.display = 'none'; // Hide non-matching year info
                }
            });
        });
    });

    yearInfo.forEach(info => { // Prevent clicks inside year info from affecting the parent
        info.addEventListener('click', function(event) {
            event.stopPropagation();
        });    
    });

    buttons.forEach(button => { // Prevent clicks inside year info from affecting the parent
        button.addEventListener('click', function(event) {
            event.stopPropagation();
        });    
    });
});


