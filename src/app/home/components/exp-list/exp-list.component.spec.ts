import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpListComponent } from './exp-list.component';

describe('ExpListComponent', () => {
  let component: ExpListComponent;
  let fixture: ComponentFixture<ExpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
