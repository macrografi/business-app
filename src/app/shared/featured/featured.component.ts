import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FeatureState } from '../../state/feature.state';
import { getFeatureCarousels } from '../../action/features-carousel.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}
  @Select(FeatureState.getFeatureList) features$: Observable<any> | undefined;

  ngOnInit() {
    return this.store.dispatch(new getFeatureCarousels());
  }
  ngOnDestroy(): void {}
}
