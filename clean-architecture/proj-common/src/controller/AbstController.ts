export abstract class AbstController<TUseCase> {
  constructor(protected useCase: TUseCase){}
}