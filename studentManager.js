// Array to store students
const class07Students = [];

// Function to add a student to the class
function addStudentToClass(studentName) {
  // Check if studentName is empty
  if (studentName === "") {
    console.log("Cannot add empty string to class");
    return;
  }

  // Check if class already has 6 students (excluding "Queen")
  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07");
    return;
  }

  // Check if studentName is already in the class
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  // Add studentName to class
  class07Students.push(studentName);
}

// Function to get the number of students in the class
function getNumberOfStudents() {
  return class07Students.length;
}

// Testing the functions
addStudentToClass("Alice");
addStudentToClass("Bob");
addStudentToClass("Charlie");
addStudentToClass("Alice"); // Should log: Student Alice is already in the class
addStudentToClass(""); // Should log: Cannot add empty string to class
addStudentToClass("David");
addStudentToClass("Eve");
addStudentToClass("Frank");
addStudentToClass("Grace");
addStudentToClass("Queen"); // Should add "Queen" even though the class is full

console.log("Number of students:", getNumberOfStudents()); // Should log: Number of students: 7
