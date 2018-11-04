const Database = require('better-sqlite3')
const db = new Database('grades.db')
const Students = require('../lib/students')(db)
const demoData = require('./_demoData.json')

// cleaning after the tests
afterAll(() => {
    db.prepare('DELETE FROM students').run()
})


test('add student', () => {
    demoData.students.forEach(s => Students.add(s))
})

test('get all students', () => {
    
    expect(Students.all()[0].firstName).toEqual(demoData.students[0].firstName)
})

test('get student by id', () => {
    expect(Students.byStudentId(demoData.students[0].studentId).firstName).toEqual(demoData.students[0].firstName)
})

// TODO: update

test('dete student', () => {
    Students.delete(demoData.students[1].studentId)

    expect( Students.all() ).toEqual( expect.not.arrayContaining( [demoData.students[1]] ))
    
})
