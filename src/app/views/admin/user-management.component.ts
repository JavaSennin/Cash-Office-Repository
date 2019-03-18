// User Management - Admin Module 

import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// import { HttpClient, HttpHeaders } from '@angular/common/http';

@NgModule({
  imports: [
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule
    // ,  HttpClient, HttpHeaders
  ]
})

@Component({
  templateUrl: './user-management.component.html'
})
export class UserManagementComponent {

  // createCashier: FormGroup;
  // constructor(private http: HttpClient) {
  // constructor() {
  //   this.createCashier = new FormGroup(
  //     {
  //       cashierCode: new FormControl(),
  //       cashierName: new FormControl(),
  //       loginId: new FormControl(),
  //       branchCode: new FormControl(),
  //       branchName: new FormControl({ value: '', disabled: true })
  //     }
  //   );
  // }

  userInput = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    enabled: new FormControl(''),
    branchName: new FormControl('', Validators.required
    )
  }) ;

  assignGroup(){}

  clear(){
    this.userInput.reset() ;
  }

  exit(){
    // Re-direct to app landing page
    window.location.href = "http://localhost:4200/#/dashboard" ;
  }

  find(){}

  reset(){}

  save(){}

  // Array to hold dynamic data - Users
  users = [
    { username: "ioamu,", password: "ioamu221", firstName: "Yioagos", lastName: "Avraamu", enabled: "false"},
    { username: "amios", password: "amios332", firstName: "Avram", lastName: "Tarasios", enabled: "true"},
    { username: "inard", password: "inard2341", firstName: "Quitin", lastName: "Edward", enabled: "false"}
  ]
}
