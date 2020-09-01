import { IUseCase } from './IUseCase'

export abstract class AbstUseCase<TRepository, TEntity> implements IUseCase<TEntity> {
  constructor(protected repository: TRepository) {}
}