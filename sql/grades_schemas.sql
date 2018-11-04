---------------------------------- TABLES ----------------------------------

-- Table for all students
DROP TABLE IF EXISTS students;
CREATE TABLE students (
	studentId 			TEXT PRIMARY KEY,
	firstName 			TEXT,
	lastName 			TEXT
);

-- Table for all courses
DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
	courseId			TEXT PRIMARY KEY,
	courseName			TEXT
);

-- Table for students enrollment
DROP TABLE IF EXISTS enrollments;
CREATE TABLE enrollments (
	courseId			TEXT,
	studentId			TEXT,

	FOREIGN KEY(courseId) REFERENCES courses(courseId),
	FOREIGN KEY(studentId) REFERENCES students(studentId)
);


-- Table for all courses' activities
DROP TABLE IF EXISTS activities;
CREATE TABLE activities (
	activityId			INTEGER PRIMARY KEY AUTOINCREMENT,
	activityName		TEXT,
	totalPoints 		REAL,
	courseId 			INTEGER NOT NULL,

	FOREIGN KEY(courseId) REFERENCES courses(courseId)
);


-- Table to store the grades for the activities per student
DROP TABLE IF EXISTS grades;
CREATE TABLE grades (
	gradeId				INTEGER PRIMARY KEY AUTOINCREMENT,
	activityId			INTEGER NOT NULL,
	studentId			TEXT NOT NULL,
	grade 				REAL NOT NULL,

	FOREIGN KEY(activityId) REFERENCES activities(activityId),
	FOREIGN KEY(studentId) REFERENCES students(studentId)
);

