// const Database = require('better-sqlite3')
// const db = new Database('grades.db')
// const Courses = require('../lib/courses')(db)
// const Activities = require('../lib/activities')(db)
// const demoData = require('./_demoData.json')


// // cleaning after the tests
// afterAll(() => {
//     db.prepare('DELETE FROM activities').run()
//     db.prepare('DELETE FROM courses').run()
// })

// test('add activity', () => {
//     Courses.add(demoData.courses[0])
//     Activities.add(demoData.activities[0])
//     Activities.add(demoData.activities[1])
// })

// test('get all activities in a course', () => {
//     expect(Activities.all()).toEqual([demoData.activities[0], demoData.activities[1]])
// })

// test('get activites by course', () => {
//     expect(Activities.byCourseId(demoData.courses[0].courseId)).toEqual([demoData.activities[0], demoData.activities[1]])
// })

