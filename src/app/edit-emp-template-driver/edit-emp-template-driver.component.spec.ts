import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpTemplateDriverComponent } from './edit-emp-template-driver.component';

describe('EditEmpTemplateDriverComponent', () => {
  let component: EditEmpTemplateDriverComponent;
  let fixture: ComponentFixture<EditEmpTemplateDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpTemplateDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpTemplateDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
