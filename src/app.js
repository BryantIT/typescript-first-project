"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string
        // private name: string
        this.employees = [];
        // this.id = id
        // this.name = n
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const command = new Department('a2', 'Command');
command.addEmployee('Spock');
command.addEmployee('Bones');
command.describe();
// const commandCopy = { name: 'second', describe: command.describe }
// commandCopy.describe()
