import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorldCalculatorComponent } from './new-world-calculator.component';

describe('NewWorldCalculatorComponent', () => {
  let component: NewWorldCalculatorComponent;
  let fixture: ComponentFixture<NewWorldCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorldCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorldCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
