import { Component, OnInit } from '@angular/core';
import { LoginService } from '../authservice/login.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor(
    private loginService:LoginService,
    private router:Router
  ) { }
data={}
  ngOnInit() {
this.data=this.loginService.token()
console.log(this.data)
  }

}
