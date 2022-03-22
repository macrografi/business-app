import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FooterMenuState } from '../../../state/footer-menu.state';
import { GetFooterMenu } from '../../../action/footer-menu.action';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(FooterMenuState.getFooterMenuList) menuItems$: Observable<any> | undefined;

  ngOnInit() {
    return this.store.dispatch(new GetFooterMenu());
  }
}
