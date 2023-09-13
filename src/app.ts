class Department {
  // private readonly id: string
  // private name: string
  private employees: string[] = []

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

const command = new Department('a2', 'Command')

command.addEmployee('Spock')
command.addEmployee('Bones')

command.describe()

// const commandCopy = { name: 'second', describe: command.describe }

// commandCopy.describe()