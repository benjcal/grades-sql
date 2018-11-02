const Database = require('better-sqlite3')
const db = new Database('grades.db')

const Students = require('./lib/students')(db)
const Courses = require('./lib/courses')

Students.add(
	{
		firstName: 'benj',
		lastName: 'qqqq',
		studentId: '111'
	}
)

console.log(
	Students.all()
	)

/*

// Create Student
const createStudent = db.prepare(
	`INSERT INTO students (
			first_name,
			last_name,
			student_id
		)
		VALUES (
			@firstName,
			@lastName,
			@studentId
		)`
	)

// TEST Function
// createStudent.run (
// 	{
// 		firstName: 'ben',
// 		lastName: 'cal',
// 		studentId: '1234'
// 	}
// )


// Get All Student
const getAllStudent = db.prepare(`SELECT * FROM students`)
// getAllStudent.all()

// Get Student by studentId
const getStudent = db.prepare(`SELECT * FROM students WHERE student_id = @studentId`)
// console.log( getStudent.get( {studentId: '1234'} ) )

// TODO: Update Student
const updateStudent = db.prepare(
	`UPDATE students SET
		first_name = @firstName,
		last_name = @lastName
	WHERE student_id = @studentId`
)

// updateStudent.run({
// 	studentId: '1234',
// 	firstName: 'aaa',
// 	lastName: 'bbb',
// })

// console.log( getStudent.get( {studentId: '1234'} ) )

// TODO: Delete Student
const deleteStudent = db.prepare('DELETE FROM students WHERE student_id = @studentId')
// TODO: need to clean up the student references before removing the student
// say, remove grades and eventually enrollments
deleteStudent.run({studentId: '1234'})
console.log(getAllStudent.all())








// INSERT INTO courses (course_name, course_short_name) VALUES ('Linear Algebra', 'MTH316');
// TODO: Create Course
const createCourse = db.prepare(
	`INSERT INTO courses (
			course_name,
			course_short_name
		)
		VALUES (
			@courseName,
			@courseShortName
		)`
	)

// TEST Function
createStudent.run (
	{
		courseName: 'Something Cool!!',
		courseShortName: 'SMT123'
	}
)



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

*/