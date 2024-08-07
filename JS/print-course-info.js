document.addEventListener('DOMContentLoaded', () => {
    // Select all print buttons and add an event listener to each one
    const buttons = document.querySelectorAll('.printButton')
    // console.log(buttons.length);

    buttons.forEach(button => {
        // console.log(button);    
        button.addEventListener('click', handlePrintClick)
    });
});

/**
 * Handles the print button click event. 
 * It shows the course details, applies a specific print stylesheet, and triggers the print dialog.
 * @param {Event} event - The click event object
 */
function handlePrintClick(event) {
    const courseId = event.target.getAttribute('data-id');
    const printStyleUrl = `CSS/view-${event.target.id}.css`;
  
    console.log(printStyleUrl);
  
    const detailsElement = document.getElementById(`course${courseId}-details`);
    detailsElement.classList.remove('hidden');
  
    const tableElement = detailsElement.querySelector('.styled-table');
    const tableRows = tableElement.children;
  
    for (const row of tableRows) {
        row.style.display = 'table-row-group';
    };
  
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = printStyleUrl;
  
    linkElement.onload = () => {
        window.print();
        // Remove the link element after printing
        linkElement.remove();
    };
  
    const styleLocation = document.getElementById('dynamic-style');
    styleLocation.appendChild(linkElement);
};