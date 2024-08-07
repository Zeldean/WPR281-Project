document.addEventListener('DOMContentLoaded', () => {
    // Select all print buttons and add an event listener to each one
    const buttons = document.querySelectorAll('.printButton')
    // console.log(buttons.length);

    buttons.forEach(button => {
        // console.log(button);    
        button.addEventListener('click', handlePrintClick)
    });
});

function handlePrintClick(event) {
    
    const printStyle = `CSS/view-${event.target.id}.css`;
    console.log(printStyle)
    const styleLocation = document.getElementById('dynamic-style');

    const details = document.getElementById(`course${event.target.getAttribute('data-id')}-details`)
    details.classList.remove('hidden');

    let table = document.querySelector(`#course${event.target.getAttribute('data-id')}-details .styled-table`);
    let children = table.children;

    for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'table-row-group';
    };

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = printStyle;
    link.onload = function() {
        window.print();
    };
    
    
    styleLocation.appendChild(link);
    setTimeout(() => {
        styleLocation.innerHTML = null;    
    }, 1000);    
};