import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CardState } from '../../../state/card.state';
import { GetCards } from '../../../action/card.action';

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMiddleComponent implements OnInit {
  totalPrice?: any = 0;
  constructor(private store: Store) {}

  @Select(CardState.getCardList) cards$: Observable<any> | undefined;

  ngOnInit() {
    this.getCard();
    this.cards$?.subscribe((val) => {
      val.forEach((value: any, key: any) => {
        console.log(value.price, value, key);
        this.totalPrice += value.price;
      });
      console.log(parseFloat(String(this.totalPrice)).toFixed());
      return parseFloat(String(this.totalPrice)).toFixed(2);
    });
  }

  private getCard() {
    return this.store.dispatch(new GetCards());
  }
}
