import { AbstUseCase } from 'proj-common'
import { IPersonRepository } from '../repository/IPersonRepository'
import { Person } from '../entity/Person'

export abstract class AbstPersonUseCase extends AbstUseCase<IPersonRepository, Person> {
  abstract create(person: Person): Promise<Person>
  abstract update(person: Person): Promise<Person>
  abstract delete(person: Person): Promise<boolean>
  abstract getAll(): Promise<Person[]>
  abstract getById(id: string): Promise<Person>
}