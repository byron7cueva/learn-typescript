import { Person } from './person/entity/Person'

/* Commons */

interface IRepository<TEntity> {}

/* interface IUseCaseConstructor<TExtendsIRepository, TExtendsIUseCase> {
  new (respository: TExtendsIRepository): TExtendsIUseCase
} */

interface IUseCase<TEntity> {}

abstract class AbstUseCase<TRepository, TEntity> implements IUseCase<TEntity> {
  constructor(protected repository: TRepository) {}
}


/* Interfaces extends */

interface IPersonRepository extends IRepository<Person> {
  save(person: Person): Promise<Person>
}

/* interface IPersonUseCase extends IUseCase<Person> {
  save(person: Person): Promise<Person>
} */

abstract class AbstPersonUseCase extends AbstUseCase<IPersonRepository, Person> {
  abstract save(person: Person): Promise<Person>
}

/* Implementations */

class PersonRepository implements IPersonRepository {
  save(person: Person): Promise<Person> {
    return Promise.resolve(person)
  }

}

class PersonUseCase extends AbstPersonUseCase {
  save(person: Person): Promise<Person> {
    return this.repository.save(person)
  }
}


/* const Prueba: IUseCaseConstructor<IPersonRepository, IPersonUseCase> = class Prueba implements IPersonUseCase {
  constructor(private repository: IPersonRepository) {}
  save(person: Person): Promise<Person> {
    return this.repository.save(person)
  }

} */

const person: Person = {
  id: '1',
  name: 'Luis',
  age: 20
}

const repo = new PersonRepository()

const useCase = new PersonUseCase(repo)

useCase.save(person)
  .then(p => console.log(p))
  .catch(error => console.error(error))