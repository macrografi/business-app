import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { HomeState } from '../../state/home.state';
import { GetCarousel } from '../../action/carousel.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  @Select(HomeState.getBannerList) carousels$: Observable<any> | undefined;

  ngOnInit() {
    return this.store.dispatch(new GetCarousel());
  }
  ngOnDestroy(): void {}
}
