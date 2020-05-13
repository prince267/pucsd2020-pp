import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service'
interface ParentData {
  user_id: number,
  parent_path_name: string,
  parent_id: number
}

@Component({
  selector: 'app-file-folder-option-dialog',
  templateUrl: './file-folder-option-dialog.component.html',
  styleUrls: ['./file-folder-option-dialog.component.css']
})
export class FileFolderOptionDialogComponent implements OnInit {

  Entity: string;
  Options: string[] = ['Folder', 'File'];

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<FileFolderOptionDialogComponent>,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: ParentData) { }

  ngOnInit(): void {
  }

  async createEntity(EntityName: string, EntityType: string) {
    if (EntityType == undefined || EntityName == "") {
      return
    }
    let EntityPathName = this.data.parent_path_name + "/" + EntityName
    if (EntityType == "Folder") {
      let FolderData = {
        "folder_name": EntityName,
        "path_name": EntityPathName
      }
      var FolderResponse = await this.dataService.CreateFolder(FolderData)
      if (FolderResponse.status == 200) {
        let FolderInFolderData = {
          "user_id": this.data.user_id,
          "parent_folder_id":this.data.parent_id,
          "child_folder_name":EntityName,
          "child_folder_id":FolderResponse.data,
          "permission_id":2
        }
        console.log(FolderInFolderData)
      }
    }
    if (EntityType == "File") {
      let FileData = {
        "file_name": EntityName,
        "path_name": EntityPathName
      }
      var FileResponse = await this.dataService.CreateFile(FileData)
      if (FileResponse.status == 200) {
        let FileInFolderData = {
          "user_id": this.data.user_id,
          "parent_folder_id":this.data.parent_id,
          "child_file_name":EntityName,
          "child_file_id":FileResponse.data,
          "permission_id":2
        }
        console.log(FileInFolderData)
      }  
    }
    // console.log("insert into file/folder", [EntityName, EntityPathName])
    // console.log("insert into file/folder_infolder", [this.data.user_id, this.data.parent_id, EntityName, 212, 1])
  }
}
