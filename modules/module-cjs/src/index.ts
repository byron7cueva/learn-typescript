class Person {
  // Private properties
  private id: string = ''
  private age: number = 0

  // Public properties
  name: string = ''
  surname: string = ''

  // constructor
  constructor(id: string = '') {
    this.id = id
  }
}

export {
  Person
}
