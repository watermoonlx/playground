import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDisplayComponent } from './sort-display.component';

describe('SortDisplayComponent', () => {
  let component: SortDisplayComponent;
  let fixture: ComponentFixture<SortDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
