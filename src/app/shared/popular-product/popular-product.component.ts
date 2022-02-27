import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
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
import { ITab } from '../../model/tab';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularProductComponent implements OnInit, OnDestroy {
  tabs: ITab[] = [
    {
      title: 'Dynamic Title 1',
      content: 'Dynamic content 1',
      customClass: 'customClass',
    },
    {
      title: 'Dynamic Title 2',
      content: 'Dynamic content 2',
      customClass: 'customClass',
    },
  ];

  constructor(private store: Store) {}

  @Select(PopularProductState.getProductMilksList) milks$: Observable<any> | undefined;
  @Select(PopularProductState.getProductCoffeeList) coffees$: Observable<any> | undefined;
  @Select(PopularProductState.getProductPetsList) pets$: Observable<any> | undefined;
  @Select(PopularProductState.getProductMeatsList) meats$: Observable<any> | undefined;
  @Select(PopularProductState.getProductVegetablesList) vegetables$: Observable<any> | undefined;
  @Select(PopularProductState.getProductFruitsList) fruits$: Observable<any> | undefined;

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
