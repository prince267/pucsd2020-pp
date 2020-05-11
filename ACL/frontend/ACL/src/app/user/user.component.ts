import { Component, OnInit } from '@angular/core';
import { LoginService } from '../authservice/login.service'
import {Router} from '@angular/router'
import {DataService} from '../data.service'

interface userData{
  user_id:number,
  first_name:string,
  last_name:string,
  password:string
}
interface response{
  status: number,
  data :[]
}
interface userGroups{

}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor(
    private loginService:LoginService,
    private dataService:DataService,
    private router:Router
  ) { }
data : userData
groups : userGroups
  ngOnInit() {
this.data=JSON.parse(this.loginService.token())
this.GetUserGroups(this.data.user_id)
  }

  GetUserGroups(id: number){
    this.dataService.GetUserGroups(id).subscribe((res :response) => {
      this.groups=res.data
      console.log(res.data)
    })
  }

}
