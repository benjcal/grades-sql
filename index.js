const Database = require('better-sqlite3')
const db = new Database('grades.db')


// Create Student
const createStudent = db.prepare( 'INSERT INTO students (first_name, last_name, student_id) VALUES (@firstName, @lastName, @studentId)' )
createStudent.run (
	{
		firstName: 'ben',
		lastName: 'cal',
		studentId: '1234'
	}
)


// Get All Student
const getAllStudent = db.prepare('SELECT * FROM students')
getAllStudent.all()

// Get Student by studentId
const getStudent = db.prepare('SELECT * FROM students WHERE student_id = @studentId')
getStudent.get( {studentId: '1234'} )

// TODO: Update Student

// TODO: Delete Student



// TODO: Create Course

// TODO: Read Course

// TODO: Update Course

// TODO: Delete Course


// TODO: Create Activity

// TODO: Read Activity

// TODO: Update Activity

// TODO: Delete Activity


// TODO: Create Grade

// TODO: Read Grade

// TODO: Update Grade

// TODO: Delete Grade