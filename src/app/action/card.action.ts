import { Card } from '../model/card';

export class AddCard {
  static readonly type = '[Card] Add';
  constructor(public payload: Card) {}
}

export class GetCard {
  static readonly type = '[Card] Get';
}

export class UpdateCard {
  static readonly type = '[Card] Update';
  constructor(public payload: Card, public id: number) {}
}

export class DeleteCard {
  static readonly type = '[Card] Delete';
  constructor(public id: number) {}
}

export class SetSelectedCard {
  static readonly type = '[Todo] Set';
  constructor(public payload: Card | null) {}
}
