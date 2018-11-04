module.exports = (db) => {
	return {
		add (obj) {
			return db.prepare (
				`INSERT INTO activities (
						activityName,
						totalPoints,
						courseId
					)
				VALUES (
					@activityName,
					@totalPoints,
					@courseId
				)`
			).run(obj)
		},

		all () {
			return db.prepare(
				`SELECT
					activityName,
					totalPoints,
					courseId
				FROM activities`
			).all()
		},

		byCourseId (courseId) {
			return db.prepare(
				`SELECT
					activityName,
					totalPoints,
					courseId
				FROM activities
				WHERE courseId = @courseId`
			).all({courseId})
		},

		update (id, obj) {
			// TODO
		},

		delete (activityId) {
			return db.prepare(`
				DELETE
				FROM students
				WHERE studentId = @studentId`
			).run({studentId: id})
		}


	}
}
