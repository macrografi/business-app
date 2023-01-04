import { Wish } from '../model/wish';

export class GetWishes {
  static readonly type = '[Wish] Get';
}

export class AddWish {
  static readonly type = '[Wish] Add';

  constructor(public payload: Wish) {}
}

export class DeleteWish {
  static readonly type = '[Wish] Delete';

  constructor(public id: number) {}
}
