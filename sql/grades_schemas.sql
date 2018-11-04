---------------------------------- TABLES ----------------------------------

-- Table for all students
DROP TABLE IF EXISTS students;
CREATE TABLE students (
	_id					INTEGER PRIMARY KEY AUTOINCREMENT,
	studentId 			TEXT,
	firstName 			TEXT,
	lastName 			TEXT
);

-- Table for all courses
DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
	_id					INTEGER PRIMARY KEY AUTOINCREMENT,
	courseId			TEXT,
	courseName			TEXT
);

-- Table for students enrollment
DROP TABLE IF EXISTS enrollments;
CREATE TABLE enrollments (
	courseId			INTEGER,
	studentId			INTEGER,

	FOREIGN KEY(courseId) REFERENCES courses(_id),
	FOREIGN KEY(studentId) REFERENCES students(_id)
);


-- Table for all courses' activities
DROP TABLE IF EXISTS activities;
CREATE TABLE activities (
	_id					INTEGER PRIMARY KEY AUTOINCREMENT,
	activityName		TEXT,
	totalPoints 		REAL,
	courseId 			INTEGER NOT NULL,

	FOREIGN KEY(courseId) REFERENCES courses(_id)
);


-- Table to store the grades for the activities per student
DROP TABLE IF EXISTS grades;
CREATE TABLE grades (
	gradeId				INTEGER PRIMARY KEY AUTOINCREMENT,
	activityId			INTEGER NOT NULL,
	studentId			INTEGER NOT NULL,
	grade 				REAL NOT NULL,

	FOREIGN KEY(activityId) REFERENCES activities(_id),
	FOREIGN KEY(studentId) REFERENCES students(_id)
);

