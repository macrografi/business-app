import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CardState } from '../../state/card.state';
import { Observable } from 'rxjs';
import { Card } from '../../model/card';
import { DeleteCard, GetCard, SetSelectedCard } from '../../action/card.action';

@Component({
  selector: 'app-exam-store',
  templateUrl: './exam-store.component.html',
  styleUrls: ['./exam-store.component.scss'],
})
export class ExamStoreComponent implements OnInit {
  @Select(CardState.getCardList) cards$: Observable<Card[]> | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetCard());
  }

  deleteCard(id: any) {
    console.log(id);
    this.store.dispatch(new DeleteCard(id));
  }

  editCard(payload: Card) {
    this.store.dispatch(new SetSelectedCard(payload));
  }
}
