// Create an object 

interface Student {
    studentName:  string;
    studentRegNumber: string;
    studentAge: number;
    studentDegree:  string;
}
// Storing data in object
const student: Student = {
    studentName:   "Sania Saeed",
    studentRegNumber:  "18-MSCS-20",
    studentAge:    32,
    studentDegree: "MSCS"

};
// Accessing object
console.log(student.studentName);
console.log(student.studentRegNumber);
console.log(student.studentAge);
console.log(student.studentDegree);
