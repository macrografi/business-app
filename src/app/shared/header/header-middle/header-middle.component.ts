import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CardState } from '../../../state/card.state';
import { GetCards } from '../../../action/card.action';

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.scss'],
})
export class HeaderMiddleComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(CardState.getCardList) cards$: Observable<any> | undefined;

  ngOnInit() {
    return this.store.dispatch(new GetCards());
  }
}
