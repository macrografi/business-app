import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FeaturesState } from '../../state/features.state';
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
  @Select(FeaturesState.getFeatureList) features$: Observable<any> | undefined;

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
