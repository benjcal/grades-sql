-- Add courses
INSERT INTO courses (courseName, courseId) VALUES ('Linear Algebra', 'MTH316');
INSERT INTO courses (courseName, courseId) VALUES ('Cool Science II', 'SCI442');

-- Add students
INSERT INTO students (firstName, lastName, studentId) VALUES ('Albert', 'Einstein', 'st5562');
INSERT INTO students (firstName, lastName, studentId) VALUES ('Ben', 'Frankling', 'st5563');

-- Enroll students in course
INSERT INTO enrollments (studentId, courseId) VALUES ('st5562', 'MTH316');
INSERT INTO enrollments (studentId, courseId) VALUES ('st5562', 'SCI442');

-- Add activities TO courses
INSERT INTO activities (activityName, totalPoints, courseId) VALUES ('Quiz 1', 20, 'MTH316');
INSERT INTO activities (activityName, totalPoints, courseId) VALUES ('Exam 1', 80, 'MTH316');
INSERT INTO activities (activityName, totalPoints, courseId) VALUES ('Quiz 1 super fun', 14, 'SCI442');
INSERT INTO activities (activityName, totalPoints, courseId) VALUES ('Exam 1 take home', 120, 'SCI442');

-- Add grades to student's activities
INSERT INTO grades (activityId, studentId, grade) VALUES (1, 'st5562', 16);
INSERT INTO grades (activityId, studentId, grade) VALUES (2, 'st5562', 77);
INSERT INTO grades (activityId, studentId, grade) VALUES (3, 'st5562', 11);
INSERT INTO grades (activityId, studentId, grade) VALUES (4, 'st5562', 93);
INSERT INTO grades (activityId, studentId, grade) VALUES (1, 'st5563', 15);
INSERT INTO grades (activityId, studentId, grade) VALUES (2, 'st5563', 76);
INSERT INTO grades (activityId, studentId, grade) VALUES (3, 'st5563', 10);
INSERT INTO grades (activityId, studentId, grade) VALUES (4, 'st5563', 92);


