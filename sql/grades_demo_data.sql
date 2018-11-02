-- Add courses
INSERT INTO courses (course_name, course_id) VALUES ('Linear Algebra', 'MTH316');
INSERT INTO courses (course_name, course_id) VALUES ('Cool Science II', 'SCI442');

-- Add students
INSERT INTO students (first_name, last_name, student_id) VALUES ('Albert', 'Einstein', 'st5562');
INSERT INTO students (first_name, last_name, student_id) VALUES ('Ben', 'Frankling', 'st5563');

-- Add activities TO courses
INSERT INTO activities (activity_name, total_points, ref_course) VALUES ('Quiz 1', 20, 1);
INSERT INTO activities (activity_name, total_points, ref_course) VALUES ('Exam 1', 80, 1);
INSERT INTO activities (activity_name, total_points, ref_course) VALUES ('Quiz 1 super fun', 14, 2);
INSERT INTO activities (activity_name, total_points, ref_course) VALUES ('Exam 1 take home', 120, 2);

-- Add grades to student's activities
INSERT INTO grades (ref_activity, ref_student, grade) VALUES (1, 1, 16);
INSERT INTO grades (ref_activity, ref_student, grade) VALUES (2, 1, 77);
INSERT INTO grades (ref_activity, ref_student, grade) VALUES (3, 1, 11);
INSERT INTO grades (ref_activity, ref_student, grade) VALUES (4, 1, 93);
INSERT INTO grades (ref_activity, ref_student, grade) VALUES (1, 2, 15);
INSERT INTO grades (ref_activity, ref_student, grade) VALUES (2, 2, 76);
INSERT INTO grades (ref_activity, ref_student, grade) VALUES (3, 2, 10);
INSERT INTO grades (ref_activity, ref_student, grade) VALUES (4, 2, 92);


