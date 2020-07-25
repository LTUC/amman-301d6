DROP TABLE IF EXISTS student;

CREATE TABLE IF NOT EXISTS student(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  student_address VARCHAR(255)
);

INSERT INTO student(first_name,student_address) VALUES ('Hisham', 'Irbid');
INSERT INTO student(first_name,student_address) VALUES ('Ashjan', 'Ghaza');