class Department {
  name: string
  private employees: string[] = []

  constructor(n: string) {
    this.name = n
  }

  describe(this: Department) {
    console.log('Department: ' + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const command = new Department('Command')

command.addEmployee('Spock')
command.addEmployee('Bones')

command.describe()

// const commandCopy = { name: 'second', describe: command.describe }

// commandCopy.describe()