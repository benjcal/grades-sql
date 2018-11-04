module.exports = (db) => {
	return {

		add (obj) {
			return db.prepare (
				`INSERT INTO students (
						firstName,
						lastName,
						studentId
					)
				VALUES (
					@firstName,
					@lastName,
					@studentId
				)`
			).run(obj)
		},

		all () {
			return db.prepare(
				`SELECT *
				FROM students`
			).all()
		},

		byStudentId (studentId) {
			return db.prepare(
				`SELECT *
				FROM students
				WHERE studentId = @studentId`
			).get({studentId})
		},

		update (id, obj) {
			// TODO
		},

		delete (_id) {
			return db.prepare(`
				DELETE
				FROM students
				WHERE _id = @_id`
			).run({_id})
		}


	}
}
