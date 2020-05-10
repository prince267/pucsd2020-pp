import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {LoginService} from '../authservice/login.service'

interface LoginResponse {
  status: number;
  data: object;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  loginForm: FormGroup;
  UserId = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  Password = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]);

  ngOnInit(): void {
    this.createFormValidations();
  }

  createFormValidations() {
    this.loginForm = this.formBuilder.group({
      UserId: this.UserId,
      Password: this.Password
    })
  }

  onSubmit() {
    let loginData = {
      "user_id": this.loginForm.value.UserId,
      "password": this.loginForm.value.Password
    }
    if(this.loginForm.invalid){
      return
    }
    this.loginService.login(loginData).subscribe((data :LoginResponse) => {
      console.log(data)
      localStorage.setItem("token",JSON.stringify(data.data));
    },
    (error: HttpErrorResponse) => {
      console.log(error.status)
  
    if(error.status==404){
      alert("no user")
    }
    })
  }
}
