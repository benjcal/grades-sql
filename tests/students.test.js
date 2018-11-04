const Database = require('better-sqlite3')
const db = new Database('grades.db')
const Students = require('../lib/students')(db)
const demoData = require('./_demoData.json')

test('add student', () => {
    demoData.students.forEach(s => Students.add(s))
})

test('get all students', () => {
    expect(Students.all()).toEqual(demoData.students)
})

test('get student by id', () => {
    expect(Students.byId(demoData.students[0].studentId)).toEqual(demoData.students[0])
})

// TODO: update

test('dete student', () => {
    Students.delete(demoData.students[0].studentId)

    expect( Students.all() ).toEqual( expect.not.arrayContaining( [demoData.students[0]] ))
    
})