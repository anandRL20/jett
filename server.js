// server.js - Node.js server to save student files locally
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' folder

// Create student_records directory if it doesn't exist
const recordsDir = path.join(__dirname, 'student_records');
if (!fs.existsSync(recordsDir)) {
    fs.mkdirSync(recordsDir, { recursive: true });
}

// Endpoint to save student data
app.post('/save-student', (req, res) => {
    try {
        const studentData = req.body;
        
        // Validate data
        if (!studentData.personalInfo || !studentData.personalInfo.name || !studentData.personalInfo.rollNumber) {
            return res.status(400).json({
                success: false,
                message: 'Student name and roll number are required'
            });
        }

        // Create filename from student name and roll number
        const studentName = studentData.personalInfo.name.replace(/[^a-zA-Z0-9]/g, '_');
        const rollNumber = studentData.personalInfo.rollNumber.replace(/[^a-zA-Z0-9]/g, '_');
        const filename = `${studentName}_${rollNumber}.json`;
        const filepath = path.join(recordsDir, filename);

        // Add server timestamp
        studentData.savedOn = new Date().toISOString();
        studentData.serverTimestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

        // Save to file
        fs.writeFileSync(filepath, JSON.stringify(studentData, null, 2), 'utf8');

        console.log(`✅ Saved: ${filename}`);

        res.json({
            success: true,
            message: 'Student data saved successfully',
            filename: filename,
            filepath: `student_records/${filename}`
        });

    } catch (error) {
        console.error('Error saving student data:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to save student data',
            error: error.message
        });
    }
});

// Endpoint to get all students (optional - for admin view)
app.get('/get-students', (req, res) => {
    try {
        const files = fs.readdirSync(recordsDir);
        const students = files
            .filter(file => file.endsWith('.json'))
            .map(file => {
                const data = fs.readFileSync(path.join(recordsDir, file), 'utf8');
                return JSON.parse(data);
            });

        res.json({
            success: true,
            count: students.length,
            students: students
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve students',
            error: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📁 Student records will be saved in: ${recordsDir}`);
});
