import { Injectable } from '@angular/core';
import { CardService } from '../service/card.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CardDefault } from '../default/card.default';
import { GetCategoryMenu } from '../action/category-menu.action';
import { tap } from 'rxjs/operators';
import { AddCard, DeleteCard, SetSelectedCard, UpdateCard } from '../action/card.action';

@State<CardDefault>({
  name: 'cards',
  defaults: {
    cards: [],
    selectedCard: undefined,
  },
})
@Injectable()
export class CardState {
  constructor(private cardService: CardService) {}

  @Selector()
  static getCardList(state: CardDefault) {
    return state.cards;
  }

  @Selector()
  static getSelectedCard(state: CardDefault) {
    return state.selectedCard;
  }

  @Action(GetCategoryMenu)
  getCard({ getState, setState }: StateContext<CardDefault>) {
    return this.cardService.getCard().pipe(
      tap((result) => {
        const state = getState();
        setState({
          ...state,
          cards: result,
        });
      }),
    );
  }

  @Action(AddCard)
  addCard({ getState, patchState }: StateContext<CardDefault>, { payload }: AddCard) {
    return this.cardService.addCard(payload).pipe(
      tap((result) => {
        const state = getState();
        patchState({
          cards: [...state.cards, result],
        });
      }),
    );
  }

  @Action(UpdateCard)
  updateCard({ getState, setState }: StateContext<CardDefault>, { payload, id }: UpdateCard) {
    return this.cardService.updateCard(payload, id).pipe(
      tap((result) => {
        const state = getState();
        const cardList = [...state.cards];
        const cardIndex = cardList.findIndex((item) => item.id === id);

        cardList[cardIndex] = result;
        setState({
          ...state,
          cards: cardList,
        });
      }),
    );
  }

  @Action(DeleteCard)
  deleteCard({ getState, setState }: StateContext<CardDefault>, { id }: DeleteCard) {
    return this.cardService.deleteCard(id).pipe(
      tap(() => {
        const state = getState();
        const filteredArray = state.cards.filter((item: any) => item.id !== id);
        setState({
          ...state,
          cards: filteredArray,
        });
      }),
    );
  }

  @Action(SetSelectedCard)
  setSelectedCardId({ getState, setState }: StateContext<CardDefault>, { payload }: SetSelectedCard) {
    const state = getState();
    setState({
      ...state,
      selectedCard: payload,
    });
  }
}
