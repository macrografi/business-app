import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CardState } from '../../../state/card.state';
import { DeleteCard, GetCards } from '../../../action/card.action';
import { ToastrService } from 'ngx-toastr';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { InfoMessageState } from '../../../state/info-message.state';

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMiddleComponent implements OnInit {
  totalPrice?: any = 0;
  totalCount?: number = 0;

  public config: PerfectScrollbarConfigInterface = {};

  constructor(private store: Store) {}

  @Select(CardState.getCardList) cards$: Observable<any> | undefined;

  ngOnInit() {
    this.getCard();
    this.cards$?.subscribe((val) => {
      let priceArray: any[] = [];
      val.forEach((value: any, key: any) => {
        return priceArray.push(value.price);
      });
      this.totalCount = val.length;
      this.totalPrice = priceArray.reduce((acc, val) => {
        return parseFloat((acc + val).toFixed(2));
      }, 0);
    });
  }

  private getCard() {
    return this.store.dispatch(new GetCards());
  }
  deleteCard(id: any) {
    //console.log(id);
    return this.store.dispatch(new DeleteCard(id));
  }
}
