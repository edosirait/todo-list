import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddTodoContentsComponent } from './dialog-add-todo-contents.component';

describe('DialogAddTodoContentsComponent', () => {
  let component: DialogAddTodoContentsComponent;
  let fixture: ComponentFixture<DialogAddTodoContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddTodoContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddTodoContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
