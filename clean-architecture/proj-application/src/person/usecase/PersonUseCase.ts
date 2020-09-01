import { AbstPersonUseCase, Person } from 'proj-domain'

export class PersonUseCase extends AbstPersonUseCase {
  create(person: Person): Promise<Person> {
    return this.repository.save(person)
  }
  update(person: Person): Promise<Person> {
    throw new Error("Method not implemented.");
  }
  delete(person: Person): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Person[]> {
    throw new Error("Method not implemented.");
  }
  getById(id: string): Promise<Person> {
    throw new Error("Method not implemented.");
  }
}