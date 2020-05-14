import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { response, FileFolderNode, AllFileFolderNode } from '../models/model'
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatDialog } from '@angular/material/dialog';
import { FilesFolderRelation } from '../FilesFoldersRelation/FileFolderRelation'
import { AllFilesFolderRelation } from '../FilesFoldersRelation/AllFilesFoldersRelation'
import { ChangePermissionDialogComponent } from '../change-permission-dialog/change-permission-dialog.component'

interface user {
  user_id: number,
  first_name: string,
  last_name: string,
  password: string
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {
  treeControl = new NestedTreeControl<FileFolderNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FileFolderNode>();

  FileFolderTreeControl = new NestedTreeControl<AllFileFolderNode>(node => node.children)
  FileFolderDataSource = new MatTreeNestedDataSource<AllFileFolderNode>();

  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) { }

  Id:number
  hasChild = (_: number, node: FileFolderNode) => !!node.children && node.children.length > 0;
  FileFolderhasChild = (_: number, node: AllFileFolderNode) => !!node.children && node.children.length > 0;

  UserFilesFolders = []
  FoldersFiles = []
  users: user[]
  selectedValue: number

  ngOnInit() {
    this.dataService.GetAllUser().subscribe((res: response) => {
      this.users = res.data
    })
    this.GetAllFileAndFolders()
  }

  async GetFileFolderTree(UserId: number) {
    this.Id=UserId
    if (UserId == undefined) {
      this.dataSource.data = []
      return
    }
    // console.log("*****",UserId)
    var userFolders = await this.dataService.GetUserFolders(UserId)
    var userFiles = await this.dataService.GetUserFiles(UserId)
    this.UserFilesFolders = FilesFolderRelation(userFiles, userFolders)
    this.dataSource.data = this.UserFilesFolders;
    // console.log(this.dataSource.data)
  }

  PermissionDialog(node1){
    // console.log(JSON.stringify(node1))
   const dialogRef= this.dialog.open(ChangePermissionDialogComponent,{
      data:node1
    })
    dialogRef.afterClosed().subscribe(result => {
      this.GetFileFolderTree(this.Id)
    });
  }
  async GetAllFileAndFolders() {

    var Folders = await this.dataService.GetAllFolders()
    var Files = await this.dataService.GetAllFiles()
    // console.log("Folders are ***", Folders)
    // console.log("files are  ", Files)
    this.FoldersFiles = FilesFolderRelation(Folders, Files)
    this.FileFolderDataSource.data = this.FoldersFiles
    // console.log(JSON.stringify(this.FileFolderDataSource.data))
    // this.dataSource.data = this.UserFilesFolders;
    // console.log(this.dataSource.data)
  }

}
