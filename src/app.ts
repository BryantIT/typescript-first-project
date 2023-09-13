class Department {
  name: string

  constructor(n: string) {
    this.name = n
  }

  describe(this: Department) {
    console.log('Department: ' + this.name)
  }
}

const command = new Department('Command')

command.describe()

const commandCopy = { name: 'second', describe: command.describe }

commandCopy.describe()