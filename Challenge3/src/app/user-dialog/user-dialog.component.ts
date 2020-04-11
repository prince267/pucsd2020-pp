import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
export interface DialogData {
  id: string;
  Photo: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  ContactNumber: string;
}
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private dataService: DataService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  updateForm: FormGroup;
  firstname = new FormControl(this.data.FirstName, [Validators.required, Validators.maxLength(100)]);
  lastname = new FormControl(this.data.LastName, [Validators.required, Validators.maxLength(100)]);
  email = new FormControl(this.data.Email, [Validators.required, Validators.email, Validators.maxLength(100)]);
  contactNumber = new FormControl(this.data.ContactNumber, [Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))])
  password = new FormControl(this.data.Password, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);



  ngOnInit() {

    this.createFormValidations();
  }

  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  createFormValidations() {
    this.updateForm = this.formBuilder.group({

      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      contactNumber: this.contactNumber,
      password: this.password,
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
  onUpdateClick() {
    let userData = {
      "Photo": this.data.Photo,
      "FirstName": this.updateForm.value.firstname,
      "LastName": this.updateForm.value.lastname,
      "Email": this.updateForm.value.email,
      "Password": this.updateForm.value.password,
      "ContactNumber": this.updateForm.value.contactNumber
    };
    this.dataService.updateUser(userData, this.data.id).subscribe(data => {
      this.openSnackBar("Successfully Updated", " 🎉")
      this.dialogRef.close();
    })
  }
}
