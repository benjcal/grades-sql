module.exports = (db) => {
	return {

		add (obj) {
			db.prepare (
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
			).run(obj)
		},

		all () {
			return db.prepare(`SELECT * FROM students`).all()
		}


	}
}




// exports.all = (db) => {
// 	db.prepare(`SELECT * FROM students`)
// }

// Get All Student
// const getAllStudent = db.prepare(`SELECT * FROM students`)
// getAllStudent.all()

// Get Student by studentId
// const getStudent = db.prepare(`SELECT * FROM students WHERE student_id = @studentId`)
// console.log( getStudent.get( {studentId: '1234'} ) )

// TODO: Update Student
// const updateStudent = db.prepare(
// 	`UPDATE students SET
// 		first_name = @firstName,
// 		last_name = @lastName
// 	WHERE student_id = @studentId`
// )

// updateStudent.run({
// 	studentId: '1234',
// 	firstName: 'aaa',
// 	lastName: 'bbb',
// })

// console.log( getStudent.get( {studentId: '1234'} ) )

// TODO: Delete Student
// const deleteStudent = db.prepare('DELETE FROM students WHERE student_id = @studentId')
// TODO: need to clean up the student references before removing the student
// say, remove grades and eventually enrollments
// deleteStudent.run({studentId: '1234'})
// console.log(getAllStudent.all())

