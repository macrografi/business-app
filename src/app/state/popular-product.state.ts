import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  PopularProductCoffeeDefault,
  PopularProductFruitDefault,
  PopularProductMeatDefault,
  PopularProductMilkDefault,
  PopularProductPetDefault,
  PopularProductVegetableDefault,
} from '../default/popular-product.default';
import {
  GetPopularProductCoffee,
  GetPopularProductFruit,
  GetPopularProductMeat,
  GetPopularProductMilk,
  GetPopularProductPet,
  GetPopularProductVegetable,
} from '../action/popular-product.action';
import { tap } from 'rxjs/operators';
import { MockPopularProductService } from '../service/mock-popular-product.service';
import { Injectable } from '@angular/core';

@State<PopularProductMilkDefault>({
  name: 'popularProducts',
  defaults: {
    popularProductsMilk: [],
  },
})
@State<PopularProductCoffeeDefault>({
  name: 'popularProductsCoffee',
  defaults: {
    popularProductsCoffee: [],
  },
})
@State<PopularProductPetDefault>({
  name: 'popularProductsPet',
  defaults: {
    popularProductsPet: [],
  },
})
@State<PopularProductMeatDefault>({
  name: 'popularProductsMeat',
  defaults: {
    popularProductsMeat: [],
  },
})
@State<PopularProductVegetableDefault>({
  name: 'popularProductsVegetable',
  defaults: {
    popularProductsVegetable: [],
  },
})
@State<PopularProductFruitDefault>({
  name: 'popularProductsFruit',
  defaults: {
    popularProductsFruit: [],
  },
})
@Injectable()
export class PopularProductState {
  constructor(private mockPopularProductService: MockPopularProductService) {}

  @Selector() static getProductMilksList(state: PopularProductMilkDefault) {
    return state.popularProductsMilk;
  }

  @Selector() static getProductCoffeeList(state: PopularProductCoffeeDefault) {
    return state.popularProductsCoffee;
  }

  @Selector() static getProductPetsList(state: PopularProductPetDefault) {
    return state.popularProductsPet;
  }

  @Selector() static getProductMeatsList(state: PopularProductMeatDefault) {
    return state.popularProductsMeat;
  }

  @Selector() static getProductVegetablesList(state: PopularProductVegetableDefault) {
    return state.popularProductsVegetable;
  }

  @Selector() static getProductFruitsList(state: PopularProductFruitDefault) {
    return state.popularProductsFruit;
  }

  @Action(GetPopularProductMilk)
  getProducts({ getState, setState }: StateContext<PopularProductMilkDefault>) {
    return this.mockPopularProductService.getPopularProductsMilk().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          popularProductsMilk: results,
        });
      }),
    );
  }

  @Action(GetPopularProductCoffee)
  getProductsCoffee({ getState, setState }: StateContext<PopularProductCoffeeDefault>) {
    return this.mockPopularProductService.getPopularProductsCoffee().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          popularProductsCoffee: results,
        });
      }),
    );
  }

  @Action(GetPopularProductPet)
  getProductsPet({ getState, setState }: StateContext<PopularProductPetDefault>) {
    return this.mockPopularProductService.getPopularProductsPet().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          popularProductsPet: results,
        });
      }),
    );
  }

  @Action(GetPopularProductMeat)
  getProductsMeat({ getState, setState }: StateContext<PopularProductMeatDefault>) {
    return this.mockPopularProductService.getPopularProductsMeat().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          popularProductsMeat: results,
        });
      }),
    );
  }

  @Action(GetPopularProductVegetable)
  getProductsVegetable({ getState, setState }: StateContext<PopularProductVegetableDefault>) {
    return this.mockPopularProductService.getPopularProductsVegetable().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          popularProductsVegetable: results,
        });
      }),
    );
  }

  @Action(GetPopularProductFruit)
  getProductsFruit({ getState, setState }: StateContext<PopularProductFruitDefault>) {
    return this.mockPopularProductService.getPopularProductsFruit().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          popularProductsFruit: results,
        });
      }),
    );
  }
}
