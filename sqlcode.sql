-- 1. Check all records
SELECT *
FROM employees;

-- 2. Check a specific employee
SELECT *
FROM employees
WHERE employee_id = 101;

-- 3. Search employees by name
SELECT *
FROM employees
WHERE name LIKE '%John%';

-- 4. Check employees with salary greater than 50,000
SELECT *
FROM employees
WHERE salary > 50000;

-- 5. Check duplicate emails
SELECT email, COUNT(*) AS count
FROM employees
GROUP BY email
HAVING COUNT(*) > 1;

-- 6. Check NULL values
SELECT *
FROM employees
WHERE email IS NULL;

-- 7. Check records created today
SELECT *
FROM employees
WHERE CAST(created_date AS DATE) = CURRENT_DATE;

-- 8. Count total records
SELECT COUNT(*) AS total_employees
FROM employees;

-- 9. Check whether a particular record exists
SELECT CASE
    WHEN EXISTS (
        SELECT 1
        FROM employees
        WHERE employee_id = 101
    )
    THEN 'Exists'
    ELSE 'Not Found'
END AS result;
