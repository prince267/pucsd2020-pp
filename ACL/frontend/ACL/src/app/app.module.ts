import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { LoginComponent } from './login/login.component';
import { GroupUserDialogComponent } from './group-user-dialog/group-user-dialog.component';
import { FileDataDialogComponent } from './file-data-dialog/file-data-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    GroupUserDialogComponent,
    FileDataDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
