import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFileFolderDialogComponent } from './new-file-folder-dialog.component';

describe('NewFileFolderDialogComponent', () => {
  let component: NewFileFolderDialogComponent;
  let fixture: ComponentFixture<NewFileFolderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFileFolderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFileFolderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
