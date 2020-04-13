import { Component, OnInit } from '@angular/core';
import { MustMatch } from './must-match.validator';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
  ) { }
  registerForm: FormGroup;
  firstname = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  lastname = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]);
  contactNumber = new FormControl('', [Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))])
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]);
  confirmPassword = new FormControl('', Validators.required);

  ngOnInit() {
    this.createFormValidations();

  }
  openSnackBar(message,action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  createFormValidations() {
    this.registerForm = this.formBuilder.group({

      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      contactNumber: this.contactNumber,
      password: this.password,
      confirmPassword: this.confirmPassword
    },
      { validator: MustMatch('password', 'confirmPassword') }
    );
  }

  passwordMatchValidator(group: FormGroup) {
    return group.get('password').value === group.get('confirmPassword').value ? null : { misMatch: true };
  }

  onSubmit() {
    let userData = {
      "Photo": "https://s3.amazonaws.com/uifaces/faces/twitter/wtrsld/128.jpg",
      "FirstName": this.registerForm.value.firstname,
      "LastName": this.registerForm.value.lastname,
      "Email": this.registerForm.value.email,
      "Password": this.registerForm.value.password,
      "ContactNumber": this.registerForm.value.contactNumber
    };
    if (this.registerForm.invalid) {

      return;
    }
    console.log(userData)
    this.dataService.insertUser(userData).subscribe(data => {
      this.openSnackBar("New User Added "," 🎉")
    })
    this.registerForm.reset();
  }
}
