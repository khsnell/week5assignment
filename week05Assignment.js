class Student {
    constructor (name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    toString() {
        return `Name: ${this.name}\n\tAge: ${this.age}\n\tGrade: ${this.grade}`;
    }
}

class StudentList {
    constructor() {
        this.list = [];
    }

    // add a Student to the list
    addStudent(student) {
        if (student instanceof Student) {
            this.list.push(student);
        }
    }

    // remove a student at a particular index
    removeStudent(index) {
        if (index > -1 && index < this.list.length) {
            this.list.splice(index, 1);
        }
    }

    // iterates through list array outputting students as a string
    viewStudents() {
        let students = '';

        for (let i = 0; i < this.list.length; i++) {
            students += `${i}) ${this.list[i].toString()}\n`;
        }

        alert(students);
    }
}

class Menu {
    constructor() {
        this.studentList = new StudentList();
    }

    // create a new Student using user input and adding to studentList
    createStudent() {
        let name = prompt('Enter student\'s name: ');
        let age = prompt('Enter student\'s age: ');
        let grade = prompt('Enter student\'s grade: ');
        this.studentList.addStudent(new Student(name, age, grade));
    }

    // remove Student at user defined index
    deleteStudent() {
        let index = prompt('Enter student index: ');
        this.studentList.removeStudent(index);
    }

    // view students using StudentList defined viewStudents
    viewStudents() {
        this.studentList.viewStudents();
    }

    start() { // entry point to application
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch(selection) {
                case '1' :
                    this.createStudent();
                    break;
                case '2' :
                    this.viewStudents();
                    break;
                case '3' :
                    this.deleteStudent();
                    break;
                default:
                    selection = 0;
            }

            selection = this.showMainMenuOptions();
        }
    }


    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create a new student
        2) view all students
        3) delete a student
        `);
    }
}

let menu = new Menu();
menu.start();