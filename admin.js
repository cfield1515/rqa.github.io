// Sample data for demonstration
const schools = [
    { name: 'School A', exams: ['Exam 1', 'Exam 2'] },
    { name: 'School B', exams: ['Exam 3'] }
];

// Function to display list of registered schools
function displaySchools() {
    const schoolList = document.getElementById('schoolList');
    schools.forEach(school => {
        const listItem = document.createElement('li');
        listItem.textContent = school.name;
        schoolList.appendChild(listItem);
    });
}

// Function to display messages from schools
function displayMessages() {
    // Assume messages are retrieved from backend
    const messages = ['Message 1', 'Message 2'];

    const messagesList = document.getElementById('messages');
    messages.forEach(message => {
        const listItem = document.createElement('li');
        listItem.textContent = message;
        messagesList.appendChild(listItem);
    });
}

// Function to display upcoming exams for each school
function displayExams() {
    const examsBody = document.getElementById('examsBody');
    schools.forEach(school => {
        school.exams.forEach(exam => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${school.name}</td>
                <td>${exam}</td>
                <td>
                    <button onclick="addExam('${school.name}', '${exam}')">Add Exam</button>
                    <button onclick="removeExam('${school.name}', '${exam}')">Remove Exam</button>
                </td>
            `;
            examsBody.appendChild(row);
        });
    });
}

// Function to add an exam for a school
function addExam(schoolName, exam) {
    // Add logic to add exam for a school
    console.log(`Adding ${exam} for ${schoolName}`);
}

// Function to remove an exam for a school
function removeExam(schoolName, exam) {
    // Add logic to remove exam for a school
    console.log(`Removing ${exam} for ${schoolName}`);
}

// Display initial data
displaySchools();
displayMessages();
displayExams();
