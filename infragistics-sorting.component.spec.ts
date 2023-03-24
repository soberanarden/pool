import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfragisticsSortingComponent } from './infragistics-sorting.component';

describe('InfragisticsSortingComponent', () => {
  let component: InfragisticsSortingComponent;
  let fixture: ComponentFixture<InfragisticsSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfragisticsSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfragisticsSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
