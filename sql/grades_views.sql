.header on
.mode column

-- SELECT * FROM courses;
-- SELECT * FROM students;
-- SELECT * FROM activities;
-- SELECT * FROM grades;


DROP VIEW IF EXISTS v_activities;
CREATE VIEW v_activities
AS
	SELECT
		activities.activity_name AS activity_name,
		courses.course_name AS course_name,
		courses.course_id AS course_id,
		courses._id AS course_id
	FROM activities
	INNER JOIN courses on courses._id = activities.ref_course;

-- SELECT * FROM v_activities;