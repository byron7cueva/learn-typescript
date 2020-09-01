import { IRepository } from 'proj-common'
import { Person } from '../entity/Person'

export interface IPersonRepository extends IRepository<Person> {
  save(person: Person): Promise<Person>
}