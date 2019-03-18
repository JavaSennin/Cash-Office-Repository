// Page Access Master - Admin Module 

import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@NgModule({
  imports: [
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule
  ]
})

@Component({
  templateUrl: 'page-access.component.html'
})
export class PageAccessComponent {

  pageInput = new FormGroup({
    screenCode: new FormControl('', Validators.required),
    screenDesc: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    application: new FormControl('', Validators.required)
  }) ;

  // Array to hold dynamic data - Available Pages
  pages = [
    {screenCode: "CAS", screenDesc: "SETUP CASHIER", url:"/pages/cash/cashier", application: "CASH OFFICE MASTER"},
    {screenCode: "PYM", screenDesc: "SETUP PAYMENT METHOD", url:"/pages/cash/method", application: "CASH OFFICE MASTER"},
    {screenCode: "APP", screenDesc: "SETUP APPLICATIONS", url:"/pages/cash/apps", application: "CASH OFFICE MASTER"}
  ] ;

  save(){}

  find(){}

  changeRoles(){}

  clear(){
    this.pageInput.reset() ;
  }

  exit(){
    // Re-direct to app landing page
    window.location.href = "http://localhost:4200/#/dashboard" ;
  }

}
