// const Database = require('better-sqlite3')
// const db = new Database('grades.db')
// const Students = require('../lib/students')(db)
// const Courses = require('../lib/courses')(db)
// const demoData = require('./_demoData.json')

// // cleaning after the tests
// afterAll(() => {
//     db.prepare('DELETE FROM enrollments').run()
//     db.prepare('DELETE FROM students').run()
//     db.prepare('DELETE FROM courses').run()
// })

// test('enroll student on course', () => {
//     Students.add(demoData.students[0])
//     Students.add(demoData.students[1])
//     Courses.add(demoData.courses[0])
//     Courses.enrollStudent(demoData.courses[0].courseId, demoData.students[0].studentId)
//     Courses.enrollStudent(demoData.courses[0].courseId, demoData.students[1].studentId)
// })

// test('get all students in a course', () => {
//     expect(Courses.students(demoData.courses[0].courseId)).toEqual([demoData.students[0], demoData.students[1]])
// })

// test('unrenroll student from course', () => {
//     Courses.unenrollStudent(demoData.courses[0].courseId, demoData.students[1].studentId)
//     expect(Courses.students(demoData.courses[0].courseId)).toEqual([demoData.students[0]])
// })