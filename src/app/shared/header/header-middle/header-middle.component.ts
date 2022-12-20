import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {CardState} from '../../../state/card.state';
import {GetCards} from '../../../action/card.action';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMiddleComponent implements OnInit {
  totalPrice?: any = 0;

  constructor(private store: Store, private toastr: ToastrService) {}

  @Select(CardState.getCardList) cards$: Observable<any> | undefined;

  ngOnInit() {

    this.showSuccess();
    this.getCard();
    this.cards$?.subscribe((val) => {
      let priceArray: any[] = [];
      val.forEach((value: any, key: any) => {
        return priceArray.push(value.price);
      });

      this.totalPrice = priceArray.reduce((acc, val) => {
        return parseFloat((acc + val).toFixed(2));
      }, 0);
    });
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  private getCard() {
    return this.store.dispatch(new GetCards());
  }
}
