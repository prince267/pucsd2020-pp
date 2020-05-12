import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

import {NewFileFolderDialogComponent} from '../new-file-folder-dialog/new-file-folder-dialog.component'
@Component({
  selector: 'app-file-folder-option-dialog',
  templateUrl: './file-folder-option-dialog.component.html',
  styleUrls: ['./file-folder-option-dialog.component.css']
})
export class FileFolderOptionDialogComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<FileFolderOptionDialogComponent>,) { }

  ngOnInit(): void {
  }
  NewFileFolderDialog(){
    this.dialogRef.close()
this.dialog.open(NewFileFolderDialogComponent)
  }
}
