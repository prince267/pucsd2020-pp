import { Component, OnInit } from '@angular/core';
import { LoginService } from '../authservice/login.service'
import { Router } from '@angular/router'
import { DataService } from '../data.service'
import { FilesFolderRelation } from '../FilesFolders/FileFolderRelation'
import * as model from '../models/model'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private dataService: DataService,
    private router: Router
  ) { }

  data: model.userData
  groups: model.userGroups[]
  UserFilesFolders = []

  async  ngOnInit() {
    this.data = JSON.parse(this.loginService.token())
    this.GetUserGroups(this.data.user_id)
    var userFolders = await this.dataService.GetUserFolders(this.data.user_id)
    var userFiles = await this.dataService.GetUserFiles(this.data.user_id)
    this.UserFilesFolders = FilesFolderRelation(userFiles, userFolders)
    console.log("user File Folder ", JSON.stringify(this.UserFilesFolders))
  }

  GetUserGroups(id: number) {
    this.dataService.GetUserGroups(id).subscribe((res: model.response) => {
      this.groups = res.data
    })
  }

}
