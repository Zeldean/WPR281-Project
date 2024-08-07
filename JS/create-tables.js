import { courses, modules, getYearData } from './module-data.js';

// Main execution
// Loop through each course and append a table to the corresponding element
courses.forEach((course) => {
    const targetElement = document.getElementById(`course${course.code}-details`);
    if (!targetElement) {
        console.error(`Element with ID course${course.code}-details not found.`);
        return;
    };
  
    const table = createTable(course.duration, course);
    targetElement.appendChild(table);
});

// Functions
/**
 * Creates a table element with the specified number of years.
 * 
 * @param {Number} totalYears - The total number of years.
 * @param {Object} course - The course object.
 * @returns {HTMLElement} The created table element.
 */
function createTable(totalYears, course) {
    const tableEl = document.createElement('table');
    tableEl.classList.add('styled-table');
  
    for (let yearCount = 1; yearCount <= totalYears; yearCount++) {
        createTableYear(yearCount, tableEl, course);
    };
  
    return tableEl;
};

/**
 * Creates a table year element and appends it to the parent element.
 * 
 * @param {Number} yearCount - The academic year (1-5).
 * @param {HTMLElement} parentEl - The parent element to append to.
 * @param {Object} course - The course object.
 * @returns {HTMLElement} The updated parent element.
 */
function createTableYear(yearCount, parentEl, course) {
    const yearData = getYearData(yearCount);
    if (!yearData) {
        console.error('Year out of range');
        return parentEl;
    };
  
    const tableYearHeadEl = document.createElement('thead');
    const tableYearBodyEl = document.createElement('tbody');
  
    tableYearBodyEl.id = `${yearData.id}-info`;
    tableYearBodyEl.classList.add('year-info');
  
    tableYearHeadEl.innerHTML = `
        <tr>
            <th colspan="6" class="year-row" data-row="${yearData.id}">${yearData.title}</th>
        </tr>
    `;
    parentEl.appendChild(tableYearHeadEl);
  
    createTableYearBodyRows(course, yearCount, tableYearBodyEl);
    parentEl.appendChild(tableYearBodyEl);
  
    return parentEl;
};



/**
 * Creates table rows for a given course and year.
 * 
 * @param {Object} course - The course object with an 'id' property.
 * @param {Number} yearCount - The year for which to create rows.
 * @param {HTMLElement} parentEL - The parent element to append rows to.
 * @returns {HTMLElement} The updated parent element.
 */
function createTableYearBodyRows(course, yearCount, parentEL) {
    // Filter modules by year and course
    const filteredModules = modules.filter(module => module.year === yearCount && module.course === course.courseId);
  
    // Create header row
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Module</th>
        <th>Code</th>
        <th>Lecturer</th>
        <th>Venue</th>
        <th>Study Guide</th>
        <th>Video</th>
    `;
    parentEL.appendChild(headerRow);
  
    // Create rows for each module
    filteredModules.forEach(module => {
        const tableBodyRowEL = document.createElement('tr');
        tableBodyRowEL.innerHTML = `
            <td>${module.moduleName}</td>
            <td>${module.code}</td>
            <td>${module.lecturer}</td>
            <td>${module.venue}</td>
            <td><a href="${module.studyGuide}" target="_blank">Study Guide</a></td>
            <td><a href="${module.video}" target="_blank">Watch Video</a></td>
        `;
        parentEL.appendChild(tableBodyRowEL);
    });
  
    return parentEL;
};