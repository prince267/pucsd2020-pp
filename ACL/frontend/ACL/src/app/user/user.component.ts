import { Component, OnInit } from '@angular/core';
import { LoginService } from '../authservice/login.service'
import { Router } from '@angular/router'
import { DataService } from '../data.service'
import * as model from '../models/model'
import { promise } from 'protractor';

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
  UserFilesFolders=[]
  
  async  ngOnInit() {
    this.data = JSON.parse(this.loginService.token())
    this.GetUserGroups(this.data.user_id)
    var userFolders = await this.dataService.GetUserFolders(this.data.user_id)
    console.log("user folders are ", userFolders)
    var userFiles = await this.dataService.GetUserFiles(this.data.user_id)
    console.log("user files are ", userFiles)
  }

  GetUserGroups(id: number) {
    this.dataService.GetUserGroups(id).subscribe((res: model.response) => {
      this.groups = res.data
    })
  }

}
