import { Component, OnInit } from '@angular/core';
import { LoginService } from '../authservice/login.service'
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router'
import { DataService } from '../data.service'
import { FilesFolderRelation } from '../FilesFolders/FileFolderRelation'
import * as model from '../models/model'

interface FileFolderNode {
  user_id	:	number;
  parent_folder_id	:number	;
  parent_folder_path	:	string;
  name	:	string;
  id	:	number;
  permission_id	:	number;
  permission_descrp	:	string;
  path_name	:	string;
  type	:	string;
  
  children?: FileFolderNode[];
}

// const TREE_DATA: FoodNode[] = [
//   {
//     name: 'Fruit',
//     children: [
//       { name: 'Apple' ,file:[{hello:"hhh"},{hello:"dddd"}],
//       type:"sddsdsdsdhs",},
//       { name: 'Banana',file:[{hello:"hhh"},{hello:"dddd"}] },
//       { name: 'Fruit loops' ,file:[{hello:"hhh"},{hello:"dddd"}],
//       type:"sdqqwqwqhs",},
//     ],
//     type:"sdhs",
//     file:[{hello:"hhh"},{hello:"dddd"}]
//   }, {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [
//           { name: 'Broccoli' ,file:[{hello:"hhh"},{hello:"dddd"}]},
//           { name: 'Brussels sprouts' },
//         ]
//       }, {
//         name: 'Orange',
//         children: [
//         ],
//         file:[{hello:"hhh"},{hello:"dddd"}]
//       },
//     ]
//   },
// ];


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
    private router: Router
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
    console.log("user File Folder ", JSON.stringify(this.UserFilesFolders))
  }

  GetUserGroups(id: number) {
    this.dataService.GetUserGroups(id).subscribe((res: model.response) => {
      this.groups = res.data
    })
  }

}
