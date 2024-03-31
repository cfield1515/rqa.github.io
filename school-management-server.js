const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Mock database
let schools = [
    { id: 1, name: 'School A', username: 'schoolA', password: 'passwordA', exams: ['Exam 1', 'Exam 2'] },
    { id: 2, name: 'School B', username: 'schoolB', password: 'passwordB', exams: ['Exam 3'] }
];

// Login endpoint for schools
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const school = schools.find(school => school.username === username && school.password === password);
    if (school) {
        res.json({ success: true, school });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

// Get exams for a school
app.get('/exams/:schoolId', (req, res) => {
    const schoolId = parseInt(req.params.schoolId);
    const school = schools.find(school => school.id === schoolId);
    if (school) {
        res.json({ exams: school.exams });
    } else {
        res.status(404).json({ message: 'School not found' });
    }
});

// Add message from school to admin
app.post('/messages', (req, res) => {
    // Add logic to handle sending messages from schools to admin
});

// Add upcoming exam for a school
app.post('/exams/:schoolId', (req, res) => {
    // Add logic to handle adding upcoming exams for schools
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
