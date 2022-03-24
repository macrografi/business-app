import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamStoreComponent } from './exam-store.component';

describe('ExamStoreComponent', () => {
  let component: ExamStoreComponent;
  let fixture: ComponentFixture<ExamStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
