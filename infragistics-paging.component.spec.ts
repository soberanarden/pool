import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfragisticsPagingComponent } from './infragistics-paging.component';

describe('InfragisticsPagingComponent', () => {
  let component: InfragisticsPagingComponent;
  let fixture: ComponentFixture<InfragisticsPagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfragisticsPagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfragisticsPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
