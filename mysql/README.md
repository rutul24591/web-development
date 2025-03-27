# MySQL Commands Reference

## MySQL Client

```sh
mysql --version
mysql -u root -p
```

User: `root@localhost`
Password: `*********`

## Database Operations

```sql
SHOW DATABASES;
CREATE DATABASE dbname;
USE dbname;
DROP DATABASE dbname;
```

## Table Operations

```sql
CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    DOB DATE
);

DROP TABLE employees;
```

## User Management

```sql
CREATE USER 'rutul.2151599'@'localhost' IDENTIFIED BY 'panenka';
CREATE USER 'rutul'@'localhost' IDENTIFIED BY 'panenka';
ALTER USER 'rutul'@'localhost' IDENTIFIED BY 'panenka234';
SELECT user, host FROM mysql.user;
DROP USER 'rutul'@'localhost';
```

Login with different user:
```sh
mysql -u rutul.2151599 -p
```

## Permissions

```sql
GRANT ALL PRIVILEGES ON employee.* TO 'rutul'@'localhost';
GRANT SELECT, INSERT, DELETE PRIVILEGES ON employee.* TO 'rutul'@'localhost';
REVOKE ALL PRIVILEGES ON *.* FROM 'rutul'@'localhost';
SHOW GRANTS FOR 'rutul'@'%';
```

## Querying Data

```sql
SELECT * FROM employee;
SELECT * FROM employee LIMIT 20;
SELECT emp_no, gender, first_name, last_name FROM employee LIMIT 20;
SELECT * FROM employee WHERE last_name = 'Bamford';
SELECT * FROM employee ORDER BY hire_date LIMIT 10;
SELECT * FROM employee WHERE birth_date LIKE '%1952%' LIMIT 10;
```

## Data Manipulation

### Insert Data
```sql
INSERT INTO department (dept_no, dept_name) VALUES ('d010', 'Technology');
```

### Update Data
```sql
UPDATE department SET dept_name = 'Helpdesk' WHERE dept_no = 'd010';
```

### Delete Data
```sql
DELETE FROM department WHERE dept_no = 'd010';
```

## Table Modification

### Adding a Column
```sql
ALTER TABLE employee ADD COLUMN dept_no CHAR(4);
```

### Adding a Foreign Key
```sql
ALTER TABLE employee 
    ADD CONSTRAINT fk_dept_no 
    FOREIGN KEY (dept_no) 
    REFERENCES department(dept_no);
```

## Joins

### Inner Join
```sql
SELECT * FROM employee 
INNER JOIN department ON employee.dept_no = department.dept_no;
```

### Left Join
```sql
SELECT emp_no, first_name, last_name, dept_name FROM employee 
LEFT JOIN department ON employee.dept_no = department.dept_no;
```

## Views

### Creating a View
```sql
CREATE VIEW employee_gender AS 
SELECT first_name, last_name, gender 
FROM employee;
```

### Dropping a View
```sql
DROP VIEW employee_gender;
```

## Indexes

### Show Indexes
```sql
SHOW INDEXES FROM employee;
```

### Create an Index
```sql
CREATE INDEX idx_last_name ON employee(last_name);
```

### Drop an Index
```sql
ALTER TABLE employee DROP INDEX idx_last_name;
```

## Subqueries

```sql
SELECT * FROM employee WHERE dept_no = ( 
    SELECT dept_no FROM department WHERE dept_name = 'Sales' 
);
```

## Stored Procedures

### Creating a Stored Procedure
```sql
delimiter //
CREATE PROCEDURE employee_count_dept()
BEGIN
    SELECT department.dept_no, department.dept_name, COUNT(employee.emp_no) AS num_employees 
    FROM department
    LEFT JOIN employee ON department.dept_no = employee.dept_no
    GROUP BY department.dept_no, department.dept_name;
END //
delimiter ;
```

### Calling and Dropping a Procedure
```sql
CALL employee_count_dept();
DROP PROCEDURE employee_count_dept;
```

## Triggers

### Creating an Audit Table
```sql
CREATE TABLE employee_audit (
    audit_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_no CHAR(4),
    action VARCHAR(50),
    action_date TIMESTAMP
);
```

### Creating a Trigger
```sql
delimiter //
CREATE TRIGGER employee_audit_trigger 
AFTER UPDATE ON employee 
FOR EACH ROW 
BEGIN 
    INSERT INTO employee_audit(dept_no, action, action_date) 
    VALUES (NEW.dept_no, 'UPDATE', NOW()); 
END //
delimiter ;
```

### Show Triggers
```sql
SHOW TRIGGERS;
SELECT * FROM employee_audit;
```

## Process List

```sql
SHOW PROCESSLIST;
```

## MySQL Dumps (Backup & Restore)

### Backup
```sh
mysqldump -u rutul.2151599 -p employee > emp_backup.sql
```

### Restore
```sh
mysql -u rutul.2151599 -p employee < emp_backup.sql
```
