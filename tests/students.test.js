const Database = require('better-sqlite3')
const db = new Database('grades.db')
const Students = require('../lib/students')(db)

test('Add Student', () => {
    Students.add(
        {
            firstName: 'benj',
            lastName: 'qqqq',
            studentId: '11122'
        }
    )
})


