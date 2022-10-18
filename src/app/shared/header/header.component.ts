import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CategoryState } from '../../state/category.state';
import { GetCategory } from '../../action/category.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(CategoryState.getCategoryList) categories$: Observable<any> | undefined;

  ngOnInit() {
    return this.store.dispatch(new GetCategory());
  }
}
