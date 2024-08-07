
import { courses, getYearData, modules } from './module-data.js';

        const output = document.getElementById('output');
        const displayButtons = document.querySelectorAll('.displayButton');

        displayButtons.forEach(button => {
            button.addEventListener('click', event => {
                const courseCode = button.dataset.code;
                const year = button.id.slice(-1);
                const course = courses.find(course => course.code == courseCode);

                if (!course) {
                    console.error(`Course not found for code ${courseCode}`);
                    return;
                }

                const heading = `${course.courseId} ${getYearData(parseInt(year)).title}`;
                const headingElement = document.createElement('h1');
                headingElement.textContent = heading;

                const listElement = document.createElement('ul');
                const populatedListElement = createYearData(year, listElement, course);

                output.innerHTML = '';
                output.appendChild(headingElement);
                output.appendChild(populatedListElement);

                // Add button open new page
                const Button = document.createElement('button');
                Button.textContent = 'See completed modules';
                Button.style.fontSize = '18px'; 
                Button.style.padding = '10px ';
                Button.style.borderRadius = '10px'; 
                Button.style.backgroundColor = 'orange'; 
                Button.style.color = 'black'; 
                Button.style.cursor = 'pointer'; 
                Button.addEventListener('click', () => {
                    openNewPage(heading);
                });
                output.appendChild(Button);
            });
        });

        function moduleClickEvent(event) {
            event.target.classList.toggle('completed');
        };

        function createYearData(yearCount, parentEL, currentCourseObj) {
            const filteredModules = modules.filter(moduleItem => {
                return moduleItem.year === parseInt(yearCount) && moduleItem.course === currentCourseObj.courseId;
            });

            filteredModules.forEach(moduleItem => {        
                const yearDateItemEL = document.createElement('li');
                yearDateItemEL.addEventListener('click', moduleClickEvent);
                yearDateItemEL.textContent = moduleItem.moduleName;
                parentEL.appendChild(yearDateItemEL);
            });

            return parentEL;
        };

        function openNewPage(heading) {
            const completedModules = Array.from(document.querySelectorAll('.completed')).map(li => li.textContent);

            const newWindow = window.open('', '_blank');
            newWindow.document.open();
            newWindow.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Completed Courses</title>
                    <style>
                        body { background-colour:lightgray; margin: 20px; }
                        h1 { color: #333; }
                        ul { list-style-type: none; padding: 0;}
                        li { margin: 5px 0; }
                        #container {
                            border: 1px solid black;
                            width: fit-content;
                            min-width: 50%;
                            margin: 20px auto;
                            background-color: #eaf0f8;
                            padding: 40px;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
                            margin-bottom: 80px;  
                        }
                        .headings{
                        display: flex;
                        justify-content: center}
                    </style>
                </head>
                <body>
                <div id="container">
                    <h1 class = "headings">${heading} </h1>
                    <h2 class = "headings">Completed Modules</h2>
                    <ul>
                        ${completedModules.map(moduleName => `<li>${moduleName}</li>`).join('')}
                    </ul>
                    </div>
                </body>
                </html>
            `);
            newWindow.document.close();
        }