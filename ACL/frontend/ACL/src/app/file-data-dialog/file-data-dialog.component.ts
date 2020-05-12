import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service'
import {fileDataResponse} from '../models/model'
interface fileInfo {
  path: string,
  type: string,
  name:string
}

@Component({
  selector: 'app-file-data-dialog',
  templateUrl: './file-data-dialog.component.html',
  styleUrls: ['./file-data-dialog.component.css']
})
export class FileDataDialogComponent implements OnInit {

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<FileDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: fileInfo) { }

  FileData: string
  ngOnInit(): void {
    this.GetFileData(this.data.path)
  }

  GetFileData(path:string){
    this.dataService.GetFileData(path).subscribe((res: fileDataResponse) => {
      this.FileData = res.data
    })
  }

  closeDialog(){
    this.dialogRef.close()
  }

  UpdateFileData(fileContent:string) {
    this.dataService.WriteIntoFile(this.data.path,fileContent).subscribe((res:fileDataResponse)=>{
      console.log(res)
    })
    this.dialogRef.close()
  }
}
