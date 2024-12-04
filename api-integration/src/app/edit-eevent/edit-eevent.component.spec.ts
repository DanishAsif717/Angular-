import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEeventComponent } from './edit-eevent.component';

describe('EditEeventComponent', () => {
  let component: EditEeventComponent;
  let fixture: ComponentFixture<EditEeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEeventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
