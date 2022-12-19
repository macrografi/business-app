import { Card } from '../model/card';

export class AddCard {
  static readonly type = '[Card] Add';

  constructor(public payload: Card) {}
}

export class GetCards {
  static readonly type = '[Card] Get';
}

export class DeleteCard {
  static readonly type = '[Card] Delete';

  constructor(public id: number) {}
}
