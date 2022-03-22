import { Component, HostListener, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CategoryMenuState } from '../../../state/category-menu.state';
import { GetCategoryMenu } from '../../../action/category-menu.action';

@Component({
  selector: 'app-header-bottom',
  templateUrl: 'header-bottom.component.html',
  styleUrls: ['header-bottom.component.scss'],
})
export class HeaderBottomComponent implements OnInit {
  allCategoriesPopup: boolean = false;
  moreCategories: boolean = false;
  windowScroll: number = 0;

  constructor(private store: Store) {}

  @Select(CategoryMenuState.getCategoryMenuList) menuItems$: Observable<any> | undefined;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.windowScroll = $event.target['scrollingElement'].scrollTop;
  }

  ngOnInit() {
    this.allCategoriesPopup = true;
    this.moreCategories = true;
    return this.store.dispatch(new GetCategoryMenu());
  }
  clickCategories() {
    this.allCategoriesPopup = !this.allCategoriesPopup;
  }
  clickMoreCategories() {
    this.moreCategories = !this.moreCategories;
  }
}
