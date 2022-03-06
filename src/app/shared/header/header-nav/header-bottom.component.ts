import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bottom',
  templateUrl: 'header-bottom.component.html',
  styleUrls: ['header-bottom.component.scss'],
})
export class HeaderBottomComponent implements OnInit {
  allCategoriesPopup: boolean = false;
  moreCategories: boolean = false;
  windowScroll: number = 0;

  constructor() {}

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.windowScroll = $event.target['scrollingElement'].scrollTop;
  }

  ngOnInit() {
    this.allCategoriesPopup = true;
    this.moreCategories = true;
  }
  clickCategories() {
    this.allCategoriesPopup = !this.allCategoriesPopup;
  }
  clickMoreCategories() {
    this.moreCategories = !this.moreCategories;
  }
}
