import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PopularProductState } from '../../state/popular-product.state';
import {
  GetPopularProductCoffee,
  GetPopularProductFruit,
  GetPopularProductMeat,
  GetPopularProductMilk,
  GetPopularProductPet,
  GetPopularProductVegetable,
} from '../../action/popular-product.action';
import { Observable, Subscription } from 'rxjs';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { CardState } from '../../state/card.state';
import { Card } from '../../model/card';
import { AddCard } from '../../action/card.action';
import { ToastrService } from 'ngx-toastr';
import { InfoMessageState } from '../../state/info-message.state';
import { GetInfoMessage } from '../../action/info-message.action';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularProductComponent implements OnInit, OnDestroy {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
  @Select(PopularProductState.getProductMilksList) milks$: Observable<any> | undefined;
  @Select(PopularProductState.getProductCoffeeList) coffees$: Observable<any> | undefined;
  @Select(PopularProductState.getProductPetsList) pets$: Observable<any> | undefined;
  @Select(PopularProductState.getProductMeatsList) meats$: Observable<any> | undefined;
  @Select(PopularProductState.getProductVegetablesList) vegetables$: Observable<any> | undefined;
  @Select(PopularProductState.getProductFruitsList) fruits$: Observable<any> | undefined;
  @Select(CardState.getSelectedCard) selectedCard$: Observable<Card> | any;
  @Select(InfoMessageState.getMessageList) messages$: Observable<any> | undefined;

  private formSubscription: Subscription = new Subscription();
  private cardItem: any;
  private success: any;
  private infoMessage: any;

  constructor(private store: Store, private toasterService: ToastrService) {}

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  ngOnInit() {
    this.getCoffee();
    this.getPet();
    this.getMeat();
    this.getVegetable();
    this.getFruit();
    this.getMilk();
    this.getMessage();
  }

  getMilk() {
    return this.store.dispatch(new GetPopularProductMilk());
  }
  getCoffee() {
    return this.store.dispatch(new GetPopularProductCoffee());
  }
  getPet() {
    return this.store.dispatch(new GetPopularProductPet());
  }
  getMeat() {
    return this.store.dispatch(new GetPopularProductMeat());
  }
  getVegetable() {
    return this.store.dispatch(new GetPopularProductVegetable());
  }
  getFruit() {
    return this.store.dispatch(new GetPopularProductFruit());
  }
  getMessage() {
    return this.store.dispatch(new GetInfoMessage());
  }

  addToCard(payload: any) {
    this.cardItem = payload;
    const fillPayload = {
      id: this.cardItem.item.id,
      description: this.cardItem.item.description,
      thumb: this.cardItem.item.thumb,
      image: this.cardItem.item.image,
      price: this.cardItem.item.price,
    };

    return this.store.dispatch(new AddCard(fillPayload)).subscribe(() => {
      this.messages$?.subscribe((res) => {
        this.infoMessage = res[0].cardAddedSuccess;
      });
      this.success = this.toasterService.success(this.infoMessage);
    });
  }
  ngOnDestroy(): void {}
}
