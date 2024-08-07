function datestart (course) { 
    let startDate;
    
    switch(course) {
    case "Bachelor of Computing":
        startDate = new Date("2024-12-01");
        break;
    case "Higher Certificate":
        startDate = new Date("2024-09-01");
        break;
    case "Bachelor of Information Technology":
        startDate = new Date("2024-11-01");
        break;
    case "Diploma":
        startDate = new Date("2024-10-01");
        break;
    default:
        startDate = null;
    }
    return startDate;
}

function formatDate(date) {
     let year = date.getFullYear();
     let month = (date.getMonth() + 1).toString().padStart(2, '0');
     let day = date.getDate().toString().padStart(2, '0');
    
     return `${year}-${month}-${day}`;
}

function daysDiff(startDate) {
    const currentDate = new Date();
    const start = new Date(startDate);
    const differenceInTime = start - currentDate;
    const differenceInDays = Math.round(differenceInTime / (86400000));///Milliseconds in a day 1000 miliseconds in a second
    return differenceInDays;
}



/**
 * ! main data colection and pdf generator 
 */


document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const studentobject = Object.fromEntries(formData);
    console.log(studentobject);

    studentobject.startDate = formatDate(new Date(datestart(studentobject.courseDropdown)));

     //Saving the object as a sting to local storage
     const info = JSON.stringify(studentobject);
     localStorage.setItem('submit', info)   ///Can only store string data in local storage 
    
     // Generate th pdf
     const {jsPDF} = window.jspdf;
     const doc = new jsPDF();
    
     // Add to pdf
     let y = 10; //y position UP DOWN ON PAGE
     doc.text("Enrollment form:", 80, y);
     y += 10;// Move down next line


     
     for (const [key, value] of Object.entries(studentobject)) {
         doc.text(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`, 10 , y);
          y += 10}
    
     // Save the pdf to the device
    doc.save('enrollment_proof.pdf');

    const daysToStart = daysDiff(studentobject.startDate);
    const dayOfStart = formatDate(new Date(datestart(studentobject.courseDropdown)));
    
    // alert(`Congratulations, ${studentobject.firstName} ${studentobject.lastName} The course starts in ${daysToStart} days`)

    document.getElementById('daysToStart').textContent = daysToStart;
    document.getElementById("dayOfStart").textContent = dayOfStart;


     document.getElementById("enrollmentForm").reset();

     showModal('#modal');
});

function calculateDaysDifference(startDate) {
    const currentDate = new Date();
    const start = new Date(startDate);
    const differenceInTime = start - currentDate;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
}

// Function to open the modal
function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

// Function to close the modal
function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// Event listeners for close buttons
const closeModalButtons = document.querySelectorAll('[data-close-button]');
closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

// Function to show the modal
function showModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    openModal(modal);
}

// Add the overlay
const overlay = document.getElementById("overlay");


/**
 * ! Phone number formatter
 */

document.getElementById('phone').addEventListener('input', function(event) {
const input = event.target;
const value = input.value.replace(/\D/g, '');
const formattedValue = formatPhoneNumber(value);
input.value = formattedValue;
});

function formatPhoneNumber(value) {
if (value.length > 6) {
    return value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
} else if (value.length > 3) {
    return value.slice(0, 3) + '-' + value.slice(3, 6);
} else {
    return value;
}
}



