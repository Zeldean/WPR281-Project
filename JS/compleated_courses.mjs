import { courses, modules, getYearData } from './module-data.js';

const coursesElements = document.querySelectorAll('.courses');

coursesElements.forEach((courseElement) => {
    courseElement.addEventListener('click', () => {
        const courseIndex = courseElement.getAttribute('data-index');
        const course = courses[courseIndex];
        const totalYears = course.duration;

        const listElement = createYearList(totalYears, course);
        const outputElement = document.getElementById('course-display');
        outputElement.innerHTML = '';
        outputElement.appendChild(listElement);
    });
});

/**
 * Creates a list element with the specified number of years.
 * 
 * @param {number} totalYears - The total number of years.
 * @param {object} course - The course object.
 * @returns {HTMLElement} The created list element.
 */
function createYearList(totalYears, course) {
    const listElement = document.createElement('ul');
  
    for (let year = 1; year <= totalYears; year++) {
        createListItemYear(year, listElement, course);
    };
  
    return listElement;
};

/**
 * Creates a list item for a year and appends it to the parent element.
 * 
 * @param {number} yearCount - The year count.
 * @param {HTMLElement} parentEL - The parent element to append to.
 * @param {object} currentCourseObj - The current course object.
 * @returns {HTMLElement} The parent element with the list item appended.
 */
function createListItemYear(yearCount, parentEL, currentCourseObj) {
    const listYearEL = document.createElement('li');
    const listYearDataEL = document.createElement('ul');
  
    listYearEL.textContent = getYearData(yearCount).title;
  
    // Create year data and append it to listYearDataEL
    createYearData(yearCount, listYearDataEL, currentCourseObj);
  
    // Append listYearEL and listYearDataEL to parentEL
    parentEL.appendChild(listYearEL);
    parentEL.appendChild(listYearDataEL);
  
    return parentEL;
};
    
/**
 * Creates a list of module names for a given year and course.
 * 
 * @param {number} yearCount - The year for which to retrieve modules.
 * @param {HTMLElement} parentEL - The parent element to append the list items to.
 * @param {object} currentCourseObj - The current course object.
 * @returns {HTMLElement} The updated parent element.
 */
function createYearData(yearCount, parentEL, currentCourseObj) {
    const filteredModules = modules.filter(moduleItem => {
        return moduleItem.year === yearCount && moduleItem.course === currentCourseObj.courseId
    });
  
    filteredModules.forEach(moduleItem => {
        const yearDateItemEL = document.createElement('li');
        yearDateItemEL.textContent = moduleItem.moduleName;
        parentEL.appendChild(yearDateItemEL);
    });
  
    return parentEL;
};


