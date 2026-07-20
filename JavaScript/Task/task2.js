let students = [
    { id:1 , name:"John", marks: 85, city:"Mumbai" },
    { id:2 , name:"Smith", marks: 45, city:"Delhi" },
    { id:3 , name:"David", marks: 95, city:"Pune" },
    { id:4 , name:"Mike", marks: 30, city:"Mumbai" },
    { id:5 , name:"Allen", marks: 70, city:"Bangalore" },
]

console.log(students)

// // 1. create a new array containing only student names
let names = students.map(student => student.name);
console.log(names);

// 2. Student Name and City ( Output Should be StudName from City )
let studentCity = students.map(student => `${student.name} from ${student.city}`);
console.log(studentCity)

// 3. Get all students with marks greater than 70.
let above70 = students.filter(student => student.marks > 70 );
console.log(above70);

// 4. Get all students from Mumbai.
let mumbaiStudents = students.filter(student => student.city === "Mumbai");
console.log(mumbaiStudents);

// 5. Get all students who failed.
let failedStudents = students.filter(student => student.marks < 35 );
console.log(failedStudents)

// 6. Find total marks of all students.
let totalMarks = students.reduce((sum,student) => sum + student.marks,0);
console.log(totalMarks);

// 7. Count total number of Students.
let totalStudents = students.length;
console.log(totalStudents);

// 8. Total Marks of Mumbai students
let MumbaiTotalMarks = students.filter(student => student.city === "Mumbai").reduce((sum,student) => sum + student.marks,0);
console.log(MumbaiTotalMarks);
