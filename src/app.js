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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Kirk']);
const command = new Department('a2', 'Command');
const accounting = new AccountingDepartment('a1', []);
accounting.addReport('Something went wrong...');
accounting.printReports();
command.addEmployee('Spock');
command.addEmployee('Bones');
command.describe();
// const commandCopy = { name: 'second', describe: command.describe }
// commandCopy.describe()
