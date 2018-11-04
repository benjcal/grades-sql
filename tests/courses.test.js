const Database = require('better-sqlite3')
const db = new Database('grades.db')
const Courses = require('../lib/courses')(db)
const demoData = require('./_demoData.json')

test('add courses', () => {
    demoData.courses.forEach(s => Courses.add(s))
})

test('get all courses', () => {
    expect(Courses.all()).toEqual(demoData.courses)
})

test('get course by id', () => {
    expect(Courses.byId(demoData.courses[0].courseId)).toEqual(demoData.courses[0])
})

// TODO: update

test('delete course', () => {
    Courses.delete(demoData.courses[0].courseId)

    expect( Courses.all() ).toEqual( expect.not.arrayContaining( [demoData.courses[0]] ))
    
})

