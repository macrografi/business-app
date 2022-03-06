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
import { Observable } from 'rxjs';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularProductComponent implements OnInit, OnDestroy {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  constructor(private store: Store) {}

  @Select(PopularProductState.getProductMilksList) milks$: Observable<any> | undefined;
  @Select(PopularProductState.getProductCoffeeList) coffees$: Observable<any> | undefined;
  @Select(PopularProductState.getProductPetsList) pets$: Observable<any> | undefined;
  @Select(PopularProductState.getProductMeatsList) meats$: Observable<any> | undefined;
  @Select(PopularProductState.getProductVegetablesList) vegetables$: Observable<any> | undefined;
  @Select(PopularProductState.getProductFruitsList) fruits$: Observable<any> | undefined;

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
  ngOnDestroy(): void {}
}
