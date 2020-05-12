import { Component, OnInit } from '@angular/core';
import { LoginService } from '../authservice/login.service'
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service'
import { FilesFolderRelation } from '../FilesFolders/FileFolderRelation'
import { GroupUserDialogComponent } from '../group-user-dialog/group-user-dialog.component'
import { FileDataDialogComponent } from '../file-data-dialog/file-data-dialog.component'
import * as model from '../models/model'

interface FileFolderNode {
  user_id: number;
  parent_folder_id: number;
  parent_folder_path: string;
  name: string;
  id: number;
  permission_id: number;
  permission_descrp: string;
  path_name: string;
  type: string;
  children?: FileFolderNode[];
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  treeControl = new NestedTreeControl<FileFolderNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FileFolderNode>();
  constructor(
    private loginService: LoginService,
    private dataService: DataService,
    private router: Router,
    public dialog: MatDialog,
  ) {

  }
  hasChild = (_: number, node: FileFolderNode) => !!node.children && node.children.length > 0;

  data: model.userData
  groups: model.userGroups[]
  UserFilesFolders = []

  async  ngOnInit() {
    this.data = JSON.parse(this.loginService.token())
    this.GetUserGroups(this.data.user_id)
    var userFolders = await this.dataService.GetUserFolders(this.data.user_id)
    var userFiles = await this.dataService.GetUserFiles(this.data.user_id)
    this.UserFilesFolders = FilesFolderRelation(userFiles, userFolders)
    this.dataSource.data = this.UserFilesFolders;
    // console.log("user File Folder ", JSON.stringify(this.UserFilesFolders))
  }

  GetUserGroups(id: number) {
    this.dataService.GetUserGroups(id).subscribe((res: model.response) => {
      this.groups = res.data
    })
  }

  openGroupUserDialog(group_id: Number) {

    const dialogRef = this.dialog.open(GroupUserDialogComponent, {
      data: group_id
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  openFileDataDialog(path: string, type: string, name: string) {
    this.dialog.open(FileDataDialogComponent, {
      data: { path, type, name }
    })
  }

}
