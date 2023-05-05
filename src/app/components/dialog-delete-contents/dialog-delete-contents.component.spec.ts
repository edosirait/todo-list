import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteContentsComponent } from './dialog-delete-contents.component';

describe('DialogDeleteContentsComponent', () => {
  let component: DialogDeleteContentsComponent;
  let fixture: ComponentFixture<DialogDeleteContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
