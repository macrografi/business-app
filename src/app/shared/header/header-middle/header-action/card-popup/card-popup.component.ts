import { Component, OnInit, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CardState } from '../../../../../state/card.state';
import { Observable } from 'rxjs';
import { Card } from '../../../../../model/card';
import { DeleteCard, GetCard } from '../../../../../action/card.action';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-card-popup',
  templateUrl: './card-popup.component.html',
  styleUrls: ['./card-popup.component.scss'],
})
export class CardPopupComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {
    useBothWheelAxes: true,
    suppressScrollX: false,
    suppressScrollY: false,
  };

  @Select(CardState.getCardList) cards$: Observable<Card[]> | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetCard());
  }

  deleteCard(id: any) {
    console.log(id);
    this.store.dispatch(new DeleteCard(id));
  }
}
