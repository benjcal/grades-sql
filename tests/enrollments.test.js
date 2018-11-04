const Database = require('better-sqlite3')
const db = new Database('grades.db')
const Students = require('../lib/students')(db)
const Courses = require('../lib/courses')(db)
const demoData = require('./_demoData.json')



test('enroll student on course', () => {
    Students.add(demoData.students[0])
    Courses.add()
    Courses.enrollStudent(demoData.courses[0].courseId, demoData.students[0].studentId)
})