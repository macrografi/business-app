import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFeaturedComponent } from './footer-featured.component';

describe('FooterFeaturedComponent', () => {
  let component: FooterFeaturedComponent;
  let fixture: ComponentFixture<FooterFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
