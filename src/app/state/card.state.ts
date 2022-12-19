import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CardDefault } from '../default/card.default';
import { CardService } from '../service/card.service';
import { tap } from 'rxjs/operators';
import { AddCard, DeleteCard, GetCards } from '../action/card.action';
import { Card } from '../model/card';

export class TodoStateModel {
  cards: Card[] | any;
}

@State<CardDefault>({
  name: 'card',
  defaults: {
    cards: [],
  },
})
@Injectable()
export class CardState {
  constructor(private cardService: CardService) {}

  @Selector() static getCardList(state: CardDefault) {
    return state.cards;
  }

  @Action(GetCards)
  getCards({ getState, setState }: StateContext<CardDefault>) {
    return this.cardService.getCards().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          cards: results,
        });
      }),
    );
  }

  @Action(AddCard)
  addCCard({ getState, patchState }: StateContext<TodoStateModel>, { payload }: AddCard) {
    return this.cardService.addCard(payload).pipe(
      tap((result) => {
        const state = getState();
        patchState({
          cards: [...state.cards, result],
        });
      }),
    );
  }

  @Action(DeleteCard)
  deleteTodo({ getState, setState }: StateContext<TodoStateModel>, { id }: DeleteCard) {
    return this.cardService.deleteCard(id).pipe(
      tap(() => {
        const state = getState();
        const filteredArray = state.cards.filter((item: { id: number }) => item.id !== id);
        setState({
          ...state,
          cards: filteredArray,
        });
      }),
    );
  }
}
