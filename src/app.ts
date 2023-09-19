class Department {
  // private readonly id: string
  // private name: string
  protected employees: string[] = []

  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = n
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
  }

  addEmployee(employee: string): void {
    if (employee === 'Kirk') {
      return
    }
    this.employees.push(employee)
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports)
  }
}

const it = new ITDepartment('d1', ['Kirk'])

const command = new Department('a2', 'Command')

const accounting = new AccountingDepartment('a1', [])

accounting.addReport('Something went wrong...')
accounting.addEmployee('Kirk')
accounting.addEmployee('Scotty')
accounting.printReports()

command.addEmployee('Spock')
command.addEmployee('Bones')

command.describe()

// const commandCopy = { name: 'second', describe: command.describe }

// commandCopy.describe()