"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const command = new Department('Command');
command.addEmployee('Spock');
command.addEmployee('Bones');
command.describe();
// const commandCopy = { name: 'second', describe: command.describe }
// commandCopy.describe()
