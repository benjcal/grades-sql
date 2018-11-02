---------------------------------- TABLES ----------------------------------

-- Table for all courses
DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
	_id					INTEGER PRIMARY KEY AUTOINCREMENT,
	course_name			TEXT,
	course_short_name	TEXT
);


-- Table for all students
DROP TABLE IF EXISTS students;
CREATE TABLE students (
	_id					INTEGER PRIMARY KEY AUTOINCREMENT,
	first_name 			TEXT,
	last_name 			TEXT,
	student_id 			TEXT
);


-- Table for all courses' activities
DROP TABLE IF EXISTS activities;
CREATE TABLE activities (
	_id					INTEGER PRIMARY KEY AUTOINCREMENT,
	activity_name		TEXT,
	total_points 		REAL,
	ref_course 		INTEGER NOT NULL,

	FOREIGN KEY(ref_course) REFERENCES courses(_id)
);


-- Table to store the grades for the activities per student
DROP TABLE IF EXISTS grades;
CREATE TABLE grades (
	_id					INTEGER PRIMARY KEY AUTOINCREMENT,
	ref_activity		INTEGER NOT NULL,
	ref_student			INTEGER NOT NULL,
	grade 				REAL NOT NULL,

	FOREIGN KEY(ref_activity) REFERENCES activities(id),
	FOREIGN KEY(ref_student) REFERENCES students(id)
);

