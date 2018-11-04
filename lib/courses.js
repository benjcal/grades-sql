module.exports = (db) => {
	return {
		add (obj) {
			return db.prepare (
				`INSERT INTO courses (
						courseName,
						courseId
					)
				VALUES (
					@courseName,
					@courseId
				)`
			).run(obj)
		},

		all () {
			return db.prepare(
				`SELECT
					courseName,
					courseId
				FROM courses`
			).all()
		},

		byId (id) {
			return db.prepare(
				`SELECT
					courseName,
					courseId
				FROM courses
				WHERE courseId = @courseId`
			).get({courseId: id})
		},

		update (id, obj) {
			// TODO
		},

		delete (id) {
			return db.prepare(`
				DELETE
				FROM courses
				WHERE courseId = @courseId`
			).run({courseId: id})
        },
        
        students (courseId) {
            return db.prepare(
                `SELECT
                    students.studentId AS studentId,
                    students.firstName AS firstName,
					students.lastName AS lastName
				FROM enrollments
				INNER JOIN students ON students.studentId = enrollments.studentId
				WHERE enrollments.courseId = @courseId`
            ).all({courseId})
        },

        enrollStudent (courseId, studentId) {
            db.prepare(
                `INSERT
                    INTO enrollments (
                        courseId,
                        studentId
                        )
                    VALUES (@courseId, @studentId)`
            ).run({courseId, studentId})

		},
		
		unenrollStudent (courseId, studentId) {
			db.prepare(
				`DELETE
				FROM enrollments
				WHERE courseId = @courseId
				AND studentId = @studentId`
			).run({courseId, studentId})
		}

	}
}