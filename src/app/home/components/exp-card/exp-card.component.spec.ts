import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpCardComponent } from './exp-card.component';

describe('ExpCardComponent', () => {
  let component: ExpCardComponent;
  let fixture: ComponentFixture<ExpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
